import { ensureLinkIs } from '../../utils/fs';
import { readConfig } from './readConfig';

export async function setupTimezone(): Promise<void> {
  const { runtimeServerTimezone } = await readConfig();

  if (!runtimeServerTimezone) return;

  console.log('Setting timezone to:', runtimeServerTimezone);

  const path = '/etc/localtime';
  const next = `/usr/share/zoneinfo/${runtimeServerTimezone}`;

  await ensureLinkIs(next, path);
}
