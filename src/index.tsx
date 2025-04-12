import React from 'react';
import { render,  } from 'ink';
import { Cli } from './cli';
import packageDetails from '../package.json';

console.clear();

render(
  <Cli 
    name={packageDetails.name}
    version={packageDetails.version}
  />
)
