import React from 'react';
import { exit } from 'process';
import { render,  } from 'ink';

import { Cli } from './cli';
import { logger } from './infra/logger';

import packageDetails from '../package.json';

logger.info({ status: 'clear console' });

try {
  const { waitUntilExit } = render(
    <Cli 
      name={packageDetails.name}
      version={packageDetails.version}
    />
  )
  await waitUntilExit();
} catch(error) {
  logger.error({ status: 'app exited with error', error });
  exit(1);
}
