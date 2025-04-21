import { logger } from "@/infra/logger";
import { ExitCodes, System } from "@/infra/system"

export const checkCommandHandler = async () => {
  const [data, error, code] = await System.exec('docker', ['--version']);

  logger.info({
    name: 'docker',
    data,
    error,
    code,
  });

  if (code !== ExitCodes.SUCCESS) {
    logger.error({
      name: 'docker',
      code,
    });

    return false;
  }
  return true;
}
