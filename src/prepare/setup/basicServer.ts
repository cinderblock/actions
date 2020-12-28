import { setupTimezone } from './Timezone';
import { setupAptDependencies } from './aptDependencies';
import { setupSecurity } from './Security';
import { readConfig } from './readConfig';
import { setAuthorizedKeys } from './Root';

export async function basicServerSetup(): Promise<void> {
  await Promise.all([
    setupSecurity(),

    readConfig()
      .then(c => c.authorizedKeys)
      .then(async keys => {
        if (keys.length) return setAuthorizedKeys('root', keys);
      }),

    setupTimezone(),

    // TODO: hostname, /etc/hosts
  ]);

  await setupAptDependencies();
}
