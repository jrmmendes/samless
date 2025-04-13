import { Command } from "commander";
import { version } from '../../package.json';

export const program = new Command();

program
  .name('samless')
  .version(version, '-v, --version', 'output the current version')
  .option('-s, --shell', 'start samless shell');
