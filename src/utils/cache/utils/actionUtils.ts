import { debug, saveState, setOutput, getState, info } from '@actions/core';
import { mkdirP } from '@actions/io';
import { statSync } from 'fs';
import { homedir } from 'os';
import { join, resolve } from 'path';
import { v4 as uuid } from 'uuid';

import { Events, Outputs, State } from '../constants';
import { ArtifactCacheEntry } from '../contracts';

// From https://github.com/actions/toolkit/blob/master/packages/tool-cache/src/tool-cache.ts#L23
export async function createTempDirectory(): Promise<string> {
  const IS_WINDOWS = process.platform === 'win32';

  let tempDirectory: string = process.env['RUNNER_TEMP'] || '';

  if (!tempDirectory) {
    let baseLocation: string;
    if (IS_WINDOWS) {
      // On Windows use the USERPROFILE env variable
      baseLocation = process.env['USERPROFILE'] || 'C:\\';
    } else {
      if (process.platform === 'darwin') {
        baseLocation = '/Users';
      } else {
        baseLocation = '/home';
      }
    }
    tempDirectory = join(baseLocation, 'actions', 'temp');
  }
  const dest = join(tempDirectory, uuid());
  await mkdirP(dest);
  return dest;
}

export function getArchiveFileSize(filePath: string): number {
  return statSync(filePath).size;
}

export function isExactKeyMatch(
  key: string,
  cacheResult?: ArtifactCacheEntry,
): boolean {
  return !!(
    cacheResult &&
    cacheResult.cacheKey &&
    cacheResult.cacheKey.localeCompare(key, undefined, {
      sensitivity: 'accent',
    }) === 0
  );
}

export function setCacheState(state: ArtifactCacheEntry): void {
  saveState(State.CacheResult, JSON.stringify(state));
}

export function setCacheHitOutput(isCacheHit: boolean): void {
  setOutput(Outputs.CacheHit, isCacheHit.toString());
}

export function setOutputAndState(
  key: string,
  cacheResult?: ArtifactCacheEntry,
): void {
  setCacheHitOutput(isExactKeyMatch(key, cacheResult));
  // Store the cache result if it exists
  cacheResult && setCacheState(cacheResult);
}

export function getCacheState(): ArtifactCacheEntry | undefined {
  const stateData = getState(State.CacheResult);
  debug(`State: ${stateData}`);
  if (stateData) {
    return JSON.parse(stateData) as ArtifactCacheEntry;
  }

  return undefined;
}

export function logWarning(message: string): void {
  const warningPrefix = '[warning]';
  info(`${warningPrefix}${message}`);
}

export function resolvePath(filePath: string): string {
  if (filePath.startsWith('~')) {
    const home = homedir();
    if (!home) {
      throw new Error('Unable to resolve `~` to HOME');
    }
    return join(home, filePath.slice(1));
  }

  return resolve(filePath);
}

export function getSupportedEvents(): string[] {
  return [Events.Push, Events.PullRequest];
}

// Currently the cache token is only authorized for push and pull_request events
// All other events will fail when reading and saving the cache
// See GitHub Context https://help.github.com/actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions#github-context
export function isValidEvent(): boolean {
  const githubEvent = process.env[Events.Key] || '';
  return getSupportedEvents().includes(githubEvent);
}
