const ReadWDB = require('./scripts/ReadWDB')
const CreatePWA = require('./scripts/CreatePWA')

const ReadPWA = require('./scripts/ReadPWA')
const CreatePWAJavaScript = require('./scripts/CreatePWAJavaScript')

let main = async function () {
  // let wdbList = ReadWDB()

  // for (let i = 0; i < wdbList.length; i++) {
  //   await CreatePWA(wdbList[i])
  //   break
  // }

  let pwaList = ReadPWA()

  for (let i = 0; i < pwaList.length; i++) {
    let {target, script} = pwaList[i]
    // console.log(target)
    // console.log(script)
    // return
    await CreatePWAJavaScript(target, script)
    break
  }
}

main()