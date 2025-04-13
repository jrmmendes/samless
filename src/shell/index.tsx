import { exit } from 'process';
import { render } from 'ink';

import { logger } from '@/infra/logger';

import { Application } from '@/shell/application';

export type PackageDetails = {
  name: string;
  version: string;
}

export const init = async (args: PackageDetails) => {
  try {
    console.clear()
    const { waitUntilExit } = render(
      <Application 
        name={args.name}
        version={args.version}
      />
    )
    await waitUntilExit();
  } catch(error) {
    logger.error({ status: 'app exited with error', error });
    exit(1);
  }
}
