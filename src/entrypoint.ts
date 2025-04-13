import { parse } from '@/infra/command-parser';
import { name, version } from '../package.json';

const command = parse(process.argv);
command({ name, version });
