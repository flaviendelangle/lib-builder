import cac from 'cac'

import { version } from '../package.json'

const cli = cac('lib-builder')
  .command('[...input]', 'Bundle input files', {
    ignoreOptionDefaultValue: true,
  })
  .action(async (_input, _options) => {
    // eslint-disable-next-line no-console
    console.log('AAAAAAAAAAAAAAAAA')
  })

cli.version(version)

process.on('unhandledRejection', err => {
  // eslint-disable-next-line no-console
  console.error(err)
  process.exit(1)
})
