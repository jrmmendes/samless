import { it, expect, describe } from 'bun:test';
import { ExitCodes, System } from '../src/infra/system.ts';
import { useSpawnMock } from './utils/spawn-mock.ts';

describe('System -> Unit Tests', () => {
  it('When command runs with successful execution, expect data as stdout, empty errors and success exit code (0)', async () => {
    useSpawnMock({ stdout: 'Hello, World!\n', exitCode: ExitCodes.SUCCESS });

    const [data, errors, code] = await System.exec('echo "Hello, World!"');

    expect(data[0]).toBe('Hello, World!\n');
    expect(errors.length).toBe(0);
    expect(code).toBe(ExitCodes.SUCCESS);
  });

  it.each(Object.values(ExitCodes))
  ('When execution exits with non-success code (%i), expect empty data, error message in errors and the code', async (exitCode: number) => {
    useSpawnMock({ stderr: 'Error occurred', exitCode });

    const [data, errors, code] = await System.exec('some-failing-command');

    expect(data.length).toBe(0);
    expect(errors[0]).toBe('Error occurred');
    expect(code).toBe(exitCode);
  });
});

  
