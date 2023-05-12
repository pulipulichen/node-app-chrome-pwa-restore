const ShellSpawn = require('./lib/ShellSpawn')
const SendKey = require('./lib/SendKey')
const sleep = require('./lib/sleep')

module.exports = async function (url) {
  let cmdOpenChrome = `google-chrome "${url}"`
  await ShellSpawn(cmdOpenChrome)
  await sleep(20000)

  await SendKey(`Escape`, 2)
  await SendKey(`F12`)
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
    
  console.log(url)
}