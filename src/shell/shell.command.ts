import { init, type PackageDetails } from '@/shell';

export const shellCommandHander = (packageDetails: PackageDetails) => {
  init(packageDetails);
}
