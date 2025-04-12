import { Box, Text } from 'ink';

const figlet = `
███████╗ █████╗ ███╗   ███╗██╗     ███████╗███████╗███████╗
██╔════╝██╔══██╗████╗ ████║██║     ██╔════╝██╔════╝██╔════╝
███████╗███████║██╔████╔██║██║     █████╗  ███████╗███████╗
╚════██║██╔══██║██║╚██╔╝██║██║     ██╔══╝  ╚════██║╚════██║
███████║██║  ██║██║ ╚═╝ ██║███████╗███████╗███████║███████║
╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝╚══════╝╚══════╝
`
export const SamlessBanner = (props: { name: string, version: string, cwd: string }) => {

  const AWS_ORANGE_COLOR = "#FE9900";

  return (
    <Box 
      borderStyle="round" 
      paddingX={1} 
      borderColor={AWS_ORANGE_COLOR}  
      flexDirection="column"
    >
      <Box paddingBottom={1}>
        <Text bold color={AWS_ORANGE_COLOR}>Welcome to Samless</Text>
      </Box>
      <Text>cwd: {props.cwd}</Text>
      <Text>{props.name}</Text>
      <Text>version: {props.version}</Text>
    </Box>
  )
};
