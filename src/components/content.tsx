import { Box } from 'ink';
import type { FC, PropsWithChildren } from 'react';
import { Tips } from './tips';

export const Content: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box flexDirection="column" padding={1}>
      {children ? children : <Tips/>}
    </Box>
  )
}
