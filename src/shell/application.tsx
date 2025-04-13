import { useEffect, useState } from 'react';
import { Box, Text, useInput } from 'ink';
import TextInput from 'ink-text-input';
import { SamlessBanner } from './components/samless-banner';
import { Content } from './components/content';

type PackageDetails = {
  name: string;
  version: string;
}

export const Application = ({ name, version }: PackageDetails) => {
  const [command, setCommand] = useState('');
  const [message, setMessage] = useState<string>();
  const [output, setOutput] = useState<string>()

  useInput((input, key) => {
    if (key.return && command === ':h') {
      setOutput(
        ':q - Quit samless\n'+
        ':h - Show this help'
      );
    }
    if (key.return && command === ':q') {
      process.exit(0);
    }
  });

  useEffect(() => {
    if (command === ':q') {
      setMessage(':q - Quit samless')
      return;
    }

    if (command === ':h') {
      setMessage(':h - Help')
      return;
    }
    setMessage('');
  }, [command])

  return (
    <Box width={80} paddingX={1} flexDirection="column">
      <SamlessBanner 
        cwd={process.cwd()}
        name={name}
        version={version}
      />

      <Content>
        {output && <Text>{output}</Text>}
      </Content>

      <Box 
        borderStyle="round" 
        borderColor="gray"
      >
        <Text>{" > "}
          <TextInput 
            value={command} 
            onChange={setCommand} 
            placeholder="try :h for help"
          />
        </Text>
      </Box>
      <Text color="gray">{message}</Text>
    </Box>
  )
}
