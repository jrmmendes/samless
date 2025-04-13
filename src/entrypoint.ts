import { shellCommandHander } from './commands/shell';

import { program } from './infra/command-handler';

program.parse(process.argv);

const options = program.opts();

if (options.shell) {
  shellCommandHander();
}
