const ShellSpawn = require('./lib/ShellSpawn')
const SendKey = require('./lib/SendKey')
const sleep = require('./lib/sleep')

const ncp = require('node-clipboardy');

module.exports = async function (url, script) {
  // return false
  let cmdOpenChrome = `google-chrome "${url}"`
  await ShellSpawn(cmdOpenChrome)
  await sleep(10000)

  await SendKey(`Escape`, 2)
  await SendKey(`F12`)
  await sleep(5000)

  ncp.writeSync(script);
  await SendKey(`Ctrl+V`)
  await SendKey(`Return`)
  await sleep(1000)

  await SendKey(`Alt+f`)
  await SendKey(`Up`, 7)
  await SendKey(`Right`)
  await SendKey(`Down`)
  await SendKey(`Return`)
  await sleep(5000)
  await SendKey(`Tab`)
  await SendKey(`space`)
  await SendKey(`Tab`, 2)
  await SendKey(`Return`)

  await sleep(1000)
  await SendKey(`Escape`, 2)
  await SendKey(`Ctrl+W`)
  await sleep(500)
  await SendKey(`Return`)

  await sleep(1000)
    
  // console.log(url)
}