import { exit } from 'process';
import { render,  } from 'ink';

import { Application } from './application';

import packageDetails from '../../package.json';
import { logger } from '../infra/logger';

export const init = async () => {
  try {
    console.clear()
    const { waitUntilExit } = render(
      <Application 
        name={packageDetails.name}
        version={packageDetails.version}
      />
    )
    await waitUntilExit();
  } catch(error) {
    logger.error({ status: 'app exited with error', error });
    exit(1);
  }
}
