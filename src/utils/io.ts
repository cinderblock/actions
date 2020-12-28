import { getInput, debug as ghDebug } from '@actions/core';
import { isGitHubAction } from './isGitHubAction';
import { formatWithOptions } from 'util';

/**
 * Read Github Action `with` field from workflow yml
 * @see https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepswith
 *
 * Often used for public and secret configuration
 *
 * @param name name of the input field
 */
export async function input(name: string): Promise<string> {
  if (!isGitHubAction) {
    throw new Error('Not made to work in other environments yet!');
    // TODO: iff not otherwise read from local config, cli arguments, or prompt the dev?
  }

  return getInput(name);
}

export function debug(...info: Parameters<typeof console.log>): void {
  if (isGitHubAction) {
    ghDebug(formatWithOptions({ colors: true }, ...info));
    return;
  }

  if (process.env.DEBUG === undefined) return;

  console.log(...info);
}

export type VerbosityLevel = 0 | 1 | 2 | 3;

export async function log(
  level: VerbosityLevel,
  ...info: Parameters<typeof debug>
): Promise<void> {
  if ((await verbosityLevel()) < level) return;

  debug(...info);
}

let cached: VerbosityLevel;
export async function verbosityLevel(): Promise<VerbosityLevel> {
  if (cached !== undefined) return cached;

  const raw = await input('verbosity');

  const level = parseInt(raw);

  if (!isFinite(level)) throw new Error(`Invalid verbosity: ${raw}.`);
  if (level < 0)
    throw new RangeError(`Invalid verbosity: ${level}. 0 is minimum.`);
  if (level > 3)
    throw new RangeError(`Invalid verbosity: ${level}. 3 is maximum.`);

  cached = level as VerbosityLevel;

  return cached;
}
