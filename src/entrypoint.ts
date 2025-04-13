import { shellCommandHander } from './commands/shell';

import { program } from './infra/args.ts';

program.parse(process.argv);

const options = program.opts();

if (options.shell) {
  shellCommandHander();
}

else {
  program.help();
}
