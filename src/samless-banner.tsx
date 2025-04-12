import React from 'react';
import { Box, Text } from 'ink';
import packageDetails from '../package.json';

const figlet = `
███████╗ █████╗ ███╗   ███╗██╗     ███████╗███████╗███████╗
██╔════╝██╔══██╗████╗ ████║██║     ██╔════╝██╔════╝██╔════╝
███████╗███████║██╔████╔██║██║     █████╗  ███████╗███████╗
╚════██║██╔══██║██║╚██╔╝██║██║     ██╔══╝  ╚════██║╚════██║
███████║██║  ██║██║ ╚═╝ ██║███████╗███████╗███████║███████║
╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝╚══════╝╚══════╝
`
export const SamlessBanner = () => {
  return (
    <Text>
      <Text>{figlet}</Text>
      <Text> {packageDetails.name}</Text>
    </Text>
  )
};
