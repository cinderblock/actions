import { debug, input } from '../../utils/io';
import { reportError } from '../../utils/reportError';
import { spawn, exec } from '../../utils/spawn';
import { mkdir, ensureFileIs, ensureFileContains } from '../../utils/fs';

/**
 * Setup the action runtime ssh settings that will be used for deploy.
 */
async function setupShhConfig(): Promise<void> {
  await mkdir(`${process.env.HOME}/.ssh`);

  const files: Array<Promise<boolean>> = [];

  const deployKey = await input('deploy-key');

  if (!deployKey) {
    throw new Error('deploy-key required! It is missing or empty.');
  }

  const identityFile = `${process.env.HOME}/.ssh/id_rsa`;

  files.push(ensureFileIs(identityFile, deployKey.trim() + '\n', 0o600));

  const runtimeHost = await input('runtime-host-hostname');
  const runtimeHostUser = await input('runtime-host-user');
  const runtimeHostPort = (await input('runtime-host-port')) || '22';

  const hostKeys = await input('deploy-identity');
  (await exec(`ssh-keyscan -p ${runtimeHostPort} ${runtimeHost}`)).stdout;

  if (hostKeys) {
    console.log('Adding host keys:');
    console.log(hostKeys);

    files.push(
      ensureFileContains(`${process.env.HOME}/.ssh/known_hosts`, hostKeys),
    );
  }

  const config = `Host runtime-server
  HostName ${runtimeHost}
  Port ${runtimeHostPort}
  User ${runtimeHostUser}
  CheckHostIP no
  StrictHostKeyChecking accept-new
`;

  files.push(ensureFileContains(`${process.env.HOME}/.ssh/config`, config));

  await Promise.all(files);
}

// cSpell:ignore executability

async function copySources(): Promise<void> {
  const localDir = await input('deploy-directory');
  const remoteDir = await input('runtime-host-directory');

  debug(3, 'spawning rsync');

  await spawn(
    'rsync',

    // Default gzip compression speeds up deploy
    '--compress',

    // Source source recursively
    '--recursive',

    // Preserve symlinks and executability
    '--links',
    '--executability',

    // Delete extraneous files on destination, even if IO errors occur
    '--delete',
    '--ignore-errors',

    // Local files to copy
    localDir,

    // Remote runtime server and destination
    `runtime-server:${remoteDir}`,
  ).then(
    () => {
      debug(3, 'rsync success');
    },
    e => {
      debug(0, 'rsync error', e);
    },
  );
}

async function restartService(wait?: () => Promise<void>): Promise<void> {
  const serviceName = await input('systemd-service');

  if (!serviceName) throw new Error('systemd-service unset');

  debug(2, 'Stopping service', serviceName);

  await spawn('ssh', 'runtime-server', 'systemctl', 'stop', serviceName);

  debug(3, 'Service stopped');

  // TODO: migrate db
  if (wait) await wait();

  debug(2, 'Starting service', serviceName);

  await spawn('ssh', 'runtime-server', 'systemctl', 'start', serviceName);

  debug(3, 'Service started');
}

export async function main(): Promise<void> {
  await setupShhConfig();
  debug(2, 'setupShhConfig() done');

  // TODO: Secrets

  await restartService(copySources);
}

if (!module.parent) main().catch(reportError);
