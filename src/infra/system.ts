import { spawn } from "node:child_process";  
import { logger } from "./logger";

export const ExitCodes = {
  SUCCESS: 0, // Successful execution
  GENERIC_ERROR: 1, // Generic error
  INCORECT_USAGE: 2, // Incorrect usage of a command
  NOT_EXECUTABLE: 126, // Command invoked cannot execute
  NOT_FOUND: 127, // Command not found
  SIGINT: 130, // Terminated by Control-C (SIGINT)
  SIGTERM: 143, // Terminated by SIGTERM
} as const;

export type ExitCode = (typeof ExitCodes)[keyof typeof ExitCodes];

export class System {
  static async exec(command: string, args?: string[]): Promise<[unknown[], unknown[], number | null]> {
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
