import { Command } from "commander";
import { version } from '../../package.json';

import { shellCommandHander } from '@/shell/shell.command.ts';

export const parse = (argv: string[]) => {
  const program = new Command();

  program
    .name('samless')
    .version(version, '-v, --version', 'output the current version')
    .option('-s, --shell', 'start samless shell');

  program.parse(argv);

  const options = program.opts();

  if (options.shell) {
    return shellCommandHander;
  }

  return () => program.help();
}
