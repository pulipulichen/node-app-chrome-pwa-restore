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
  //pwaSPList = []
  // console.log(pwaList)

  // console.log(await IsPWAExisted('日常生活 Life'))
  // return 
  
  for (let i = 0; i < pwaSPList.length; i++) {

    console.log(`pwaSPList: ${i}/${pwaSPList.length} (${Math.round((i/pwaSPList.length)*100)}%)`)
    let {target, script, name} = pwaSPList[i]

    if (await IsPWAExisted(name)) {
      console.log(`Existed: ${name}`)
      continue
    }

    console.log(target)
    // console.log(script)
    // return

    await CreatePWAJavaScript(target, script)
    // break
  }

  // return false

  // -----
  // 不用登入的

  let pwaList = ReadPWA(false)
  // console.log(pwaList)
  // return 

  // 要設定的i是該列的列數-2

  // start = 105
  // start = 5

  // end = pwaList.length
  // end = 10


  for (let i = start; i < end; i++) {
    console.log(`ReadPWA: ${i}/${pwaList.length} (${Math.round((i/pwaList.length)*100)}%)`)
    let {target, script, name} = pwaList[i]
    if (await IsPWAExisted(name)) {
      console.log(`Existed: ${name}`)
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
//   wdbList = []

  for (let i = 0; i < wdbList.length; i++) {
    // let {target, script, name} = wdbList[i]
    // console.log(wdbList[i])
    // if (IsPWAExisted(name)) {
    //   console.log(`Existed: ${name}`)
    //   continue
    // }
    console.log(`ReadWDB: ${i}/${wdbList.length} (${Math.round((i/wdbList.length)*100)}%)`)
    await CreatePWA(wdbList[i])
    // break
  }
}

main()
