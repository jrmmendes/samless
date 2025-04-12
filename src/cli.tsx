import React from 'react';
import { Box } from 'ink';
import { SamlessBanner } from './components/samless-banner';

type PackageDetails = {
  name: string;
  version: string;
}

export const Cli = ({ name, version }: PackageDetails) => {
  return (
    <Box borderStyle={"round"} padding={2}>
      <SamlessBanner footer={`${name}@${version}`}/>
    </Box>
  )

}
