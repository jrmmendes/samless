import React, { useState } from 'react';
import { Box, Text } from 'ink';
import TextInput from 'ink-text-input';
import { SamlessBanner } from './components/samless-banner';

type PackageDetails = {
  name: string;
  version: string;
}

export const Cli = ({ name, version }: PackageDetails) => {

  const [command, setCommand] = useState('')


  return (
    <Box width={80} padding={1} flexDirection="column">
      <SamlessBanner footer={`${name}@${version}`}/>

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

    </Box>
  )
}
