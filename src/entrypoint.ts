import { shellCommandHander } from './commands/shell';
import { logger } from './infra/logger';

logger.info('> started shell')

shellCommandHander();

