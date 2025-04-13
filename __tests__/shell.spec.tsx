import {render} from 'ink-testing-library';
import { it, expect } from 'bun:test';
import {SamlessBanner} from '../src/shell/components/samless-banner';

it('should generate a valid banner', () => {
  const {lastFrame} = render(
    <SamlessBanner name='test' cwd='/test' version="0.1.0"/>
  )

  expect(lastFrame()).toMatchInlineSnapshot(`
    "\x1B[38;2;254;153;0m╭──────────────────────────────────────────────────────────────────────────────────────────────────╮\x1B[39m
    \x1B[38;2;254;153;0m│\x1B[39m \x1B[1m\x1B[38;2;254;153;0mWelcome to Samless\x1B[39m\x1B[22m                                                                               \x1B[38;2;254;153;0m│\x1B[39m
    \x1B[38;2;254;153;0m│\x1B[39m                                                                                                  \x1B[38;2;254;153;0m│\x1B[39m
    \x1B[38;2;254;153;0m│\x1B[39m cwd: /test                                                                                       \x1B[38;2;254;153;0m│\x1B[39m
    \x1B[38;2;254;153;0m│\x1B[39m test                                                                                             \x1B[38;2;254;153;0m│\x1B[39m
    \x1B[38;2;254;153;0m│\x1B[39m version: 0.1.0                                                                                   \x1B[38;2;254;153;0m│\x1B[39m
    \x1B[38;2;254;153;0m╰──────────────────────────────────────────────────────────────────────────────────────────────────╯\x1B[39m"
  `);
})
