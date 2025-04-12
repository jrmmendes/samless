import { useEffect, useState } from 'react';
import { Box, Text, useInput } from 'ink';
import TextInput from 'ink-text-input';
import { SamlessBanner } from './components/samless-banner';
import { Content } from './components/content';

type PackageDetails = {
  name: string;
  version: string;
}

export const Cli = ({ name, version }: PackageDetails) => {
  const [command, setCommand] = useState('');
  const [message, setMessage] = useState<string>();
  const [output, setOutput] = useState<string>()

  useInput((input, key) => {
    if (key.return && command === ':h') {
      setOutput(':q - Quit Samless');
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
    <Box width={80} padding={1} flexDirection="column">
      <SamlessBanner 
        cwd={process.cwd()}
        footer={`${name}@${version}`}
      />

      <Content>
        {output && <Text>{output}</Text>}
      </Content>

      <Box 
        borderStyle="round" 
        borderColor="gray"
        paddingX={1} 
      >
        <Text>{"> "}
          <TextInput 
            value={command} 
            onChange={setCommand} 
            placeholder="try :h commands"
          />
        </Text>
      </Box>
      <Text color="gray">{message}</Text>

    </Box>
  )
}
