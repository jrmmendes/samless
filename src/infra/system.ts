import { spawn } from "node:child_process";  
import { logger } from "./logger";

export const ExitCode = {
  SUCCESS: 0,
} as const;

export class System {
  static async exec(command: string, args: string[]): Promise<[unknown[], unknown[], number | null]> {
    const execution = spawn(command, args);

    logger.info({ command });

    const data: unknown[] = [], error: unknown[] = [];

    return new Promise((resolve) => {
      execution.stdout.on('data', (d) => {
        logger.info(d);
        data.push(Buffer.from(d).toString('utf-8'))
      });

      execution.stderr.on('data', (e) => {
        error.push(e)
      });

      execution.on('close', (code) => {
        resolve([data, error, code]);
      });
    });
  }
}
