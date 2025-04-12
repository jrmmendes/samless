import { Box, Text } from 'ink';

const figlet = `
███████╗ █████╗ ███╗   ███╗██╗     ███████╗███████╗███████╗
██╔════╝██╔══██╗████╗ ████║██║     ██╔════╝██╔════╝██╔════╝
███████╗███████║██╔████╔██║██║     █████╗  ███████╗███████╗
╚════██║██╔══██║██║╚██╔╝██║██║     ██╔══╝  ╚════██║╚════██║
███████║██║  ██║██║ ╚═╝ ██║███████╗███████╗███████║███████║
╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚══════╝╚══════╝╚══════╝
`
export const SamlessBanner = (props: { footer: string, cwd: string }) => {

  const AWS_ORANGE_COLOR = "#FE9900";

  return (
    <Box 
      borderStyle="round" 
      padding={1} 
      borderColor={AWS_ORANGE_COLOR}  
      width={40}
      flexDirection="column"
    >
      <Text bold color={AWS_ORANGE_COLOR}>Welcome to Samless</Text>
      <Text>cwd: {props.cwd}</Text>
      <Text>{props.footer}</Text>
    </Box>
  )
};
