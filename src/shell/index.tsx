import { exit } from 'process';
import { render } from 'ink';

import { Application } from '@/shell/application';

export type PackageDetails = {
  name: string;
  version: string;
}

export const init = async (args: PackageDetails) => {
  try {
    console.clear()
    const { waitUntilExit } = render(
      <Application 
        name={args.name}
        version={args.version}
      />
    )
    await waitUntilExit();
  } catch(error) {
    console.error({ status: 'app exited with error', error });
    exit(1);
  }
}
