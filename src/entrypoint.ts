import { parse } from './infra/command-parser';

const command = parse(process.argv);
command();
