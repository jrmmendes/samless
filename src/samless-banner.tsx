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
      <Text color={"#FE9900"}>{figlet}</Text>
      <Text> {packageDetails.name}</Text>
    </Text>
  )
};
