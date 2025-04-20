import { logger } from "@/infra/logger";
import { ExitCode, System } from "@/infra/system"

export const checkCommandHandler = async () => {
  const [data, error, code] = await System.exec('docker', ['--version']);

  logger.info({
    name: 'docker',
    data,
    error,
    code,
  });

  if (code !== ExitCode.SUCCESS) {
    logger.error({
      name: 'docker',
      code,
    });

    return false;
  }
  return true;
}
