const ShellSpawn = require('./lib/ShellSpawn')
const SendKey = require('./lib/SendKey')
const sleep = require('./lib/sleep')

const ncp = require('node-clipboardy');

const fs = require('fs')
const path = require('path')
const scriptClearBeforeunload = fs.readFileSync(path.join(__dirname, './clearBeforeunload.js'), 'utf8')

module.exports = async function (url, script) {
  // return false
  let cmdOpenChrome = `google-chrome "${url}"`
  await ShellSpawn(cmdOpenChrome)
  await sleep(10000)

  await SendKey(`Escape`, 2)
  await sleep(500)
  
  await SendKey(`F12`)
  await sleep(5000)

  ncp.writeSync(script);
  await SendKey(`Ctrl+V`)
  await SendKey(`Return`)
  await sleep(1000)

  ncp.writeSync(scriptClearBeforeunload);
  await SendKey(`Ctrl+V`)
  await SendKey(`Return`)
  await sleep(1000)

  await SendKey(`Alt+f`)
  await sleep(1000)
  await SendKey(`Up`, 7) // for ver 115
  await SendKey(`Right`)
  await sleep(1000)
  // await SendKey(`Up`, 5)
  await SendKey(`Down`) // for ver 115
  await SendKey(`Return`)
  await sleep(5000)
  await SendKey(`Tab`)
  await SendKey(`space`)
  await SendKey(`Tab`, 2)
  await SendKey(`Return`)

  await sleep(1000)
  await SendKey(`Escape`, 2)
  await sleep(1000)
  await SendKey(`Ctrl+W`)
  await sleep(500)
  // await SendKey(`Return`)

  await sleep(1000)
    
  // console.log(url)
}