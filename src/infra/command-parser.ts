import { Command } from "commander";
import { version } from '../../package.json';

import { shellCommandHander } from '@/shell/shell.command.ts';
import { checkCommandHandler } from '@/check/check.command.ts';

export const parse = (argv: string[]) => {
  const program = new Command();

  program
    .name('samless')
    .version(version, '-v, --version', 'output the current version')
    .option('-s, --shell', 'start samless shell')
    .option('-c, --check <COMPONENT>', 'check')


  program.parse(argv);

  const options = program.opts();

  if (options.shell) {
    return shellCommandHander;
  }

  if (options.check) {
    return checkCommandHandler;
  }

  return () => program.help();
}
