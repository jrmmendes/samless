
const ifNotTest = (method: Function) => {
  const silentLogger = (...arg: unknown[]) => {}
  return process.env.NODE_ENV?.toUpperCase() === 'TEST' ? silentLogger : method;

}

export const logger = {
  info: ifNotTest(console.log),
  error: ifNotTest(console.error),
  warn: ifNotTest(console.warn),
}
