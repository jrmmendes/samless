import { mock } from 'bun:test'

type UseSpawnMockArgs = { stdout?: string, stderr?: string, exitCode: ExitCode }

export const useSpawnMock = ({ stdout, stderr, exitCode }: UseSpawnMockArgs) => {
  const spawn = mock(() => ({
    stdout: {
      on: (event: string, callback: Function) => {
        if (event === 'data' && stdout !== undefined) {
          callback(stdout);
        }
      },
    },
    stderr: {
      on: (event: string, callback: Function) => {
        if (event === 'data' && stderr !== undefined) {
          callback(stderr);
        }
      },
    },
    on: (event: string, callback: Function) => {
      if (event === 'close') {
        callback(exitCode);
      }
    },
  }));

  mock.module('child_process', () => ({
    spawn,
  }));
};
