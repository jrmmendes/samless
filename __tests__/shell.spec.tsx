import { render } from 'ink-testing-library';
import { it, expect } from 'bun:test';
import { SamlessBanner } from '../src/shell/components/samless-banner';

it('should generate a valid banner', () => {
  const { lastFrame } = render(
    <SamlessBanner name='test' cwd='/test' version="0.1.0"/>
  )

  expect(lastFrame()).toMatchInlineSnapshot(`
    "╭──────────────────────────────────────────────────────────────────────────────────────────────────╮
    │ Welcome to Samless                                                                               │
    │                                                                                                  │
    │ cwd: /test                                                                                       │
    │ test                                                                                             │
    │ version: 0.1.0                                                                                   │
    ╰──────────────────────────────────────────────────────────────────────────────────────────────────╯"
  `);
})
