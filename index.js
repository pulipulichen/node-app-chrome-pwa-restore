const ReadWDB = require('./scripts/ReadWDB')
const CreatePWA = require('./scripts/CreatePWA')

let main = async function () {
  let wdbList = ReadWDB()

  for (let i = 0; i < wdbList.length; i++) {
    await CreatePWA(wdbList[i])
  }
}

main()