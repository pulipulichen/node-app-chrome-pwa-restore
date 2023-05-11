const ReadWDB = require('./scripts/ReadWDB')
const CreatePWA = require('./scripts/CreatePWA')

const ReadPWA = require('./scripts/ReadPWA')
const CreatePWAJavaScript = require('./scripts/CreatePWAJavaScript')

let main = async function () {
  let wdbList = ReadWDB()

  for (let i = 0; i < wdbList.length; i++) {
    console.log(`${i}/${wdbList.length} (${Math.round((i/wdbList.length)*100)}%)`)
    await CreatePWA(wdbList[i])
    // break
  }

  // -----

  let pwaSPList = ReadPWA(true)
  // console.log(pwaList)
  // return 
  for (let i = 15; i < pwaSPList.length; i++) {
    console.log(`${i}/${pwaSPList.length} (${Math.round((i/pwaSPList.length)*100)}%)`)
    let {target, script} = pwaSPList[i]
    console.log(target)
    // console.log(script)
    // return

    await CreatePWAJavaScript(target, script)
    // break
  }

  // -----

  let pwaList = ReadPWA()
  // console.log(pwaList)
  // return 
  for (let i = 0; i < pwaList.length; i++) {
    console.log(`${i}/${pwaList.length} (${Math.round((i/pwaList.length)*100)}%)`)
    let {target, script} = pwaList[i]
    console.log(target)
    // console.log(script)
    // return

    await CreatePWAJavaScript(target, script)
    // break
  }

}

main()