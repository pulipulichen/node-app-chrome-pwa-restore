const ReadWDB = require('./scripts/ReadWDB')
const CreatePWA = require('./scripts/CreatePWA')

const ReadPWA = require('./scripts/ReadPWA')
const CreatePWAJavaScript = require('./scripts/CreatePWAJavaScript')

const IsPWAExisted = require('./scripts/IsPWAExisted')

let main = async function () {

  // return await IsPWAExisted()

  let start, end
  // -----
  // 需要登入的

  let pwaSPList = ReadPWA(true)
  pwaSPList = []
  // console.log(pwaList)

  // return 
  
  for (let i = 0; i < pwaSPList.length; i++) {
    console.log(`${i}/${pwaSPList.length} (${Math.round((i/pwaSPList.length)*100)}%)`)
    let {target, script} = pwaSPList[i]
    console.log(target)
    // console.log(script)
    // return

    await CreatePWAJavaScript(target, script)
    // break
  }

  // -----
  // 不用登入的

  let pwaList = ReadPWA(false)
  // console.log(pwaList)
  // return 

  // 要設定的i是該列的列數-2

  start = 0
  // start = 5

  end = pwaList.length
  // end = 10

  for (let i = start; i < end; i++) {
    console.log(`${i}/${pwaList.length} (${Math.round((i/pwaList.length)*100)}%)`)
    let {target, script, name} = pwaList[i]
    if (IsPWAExisted(name)) {
      continue
    }
    console.log(target)
    // console.log(script)
    // return

    await CreatePWAJavaScript(target, script)
    // break
  }


  // ------------
  // WDB

  let wdbList = ReadWDB()
  wdbList = []

  for (let i = 0; i < wdbList.length; i++) {
    console.log(`${i}/${wdbList.length} (${Math.round((i/wdbList.length)*100)}%)`)
    await CreatePWA(wdbList[i])
    // break
  }
}

main()
