const XLSX = require("xlsx");

const fs = require("fs")

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

module.exports = function (sp = false) {
  var ods = fs.readFileSync('./APP ICON LIST.ods')
  var workbook = XLSX.read(ods)
  // console.log(workbook)

  let sheet = 'list'
  if (sp === true) {
    sheet = 'list-login'
  }

  const worksheet = workbook.Sheets[sheet];
  const data = XLSX.utils.sheet_to_json(worksheet,{header:1});

  let output = []

  data.forEach((row, i) => {
    if (i === 0) {
      return false
    }
    let target = row[3]
    let script = row[5]
    let name = row[0]
    // console.log(target)
    if (!target || target.startsWith('http') === false) {
      return false
    }
    output.push({target, script, name})
  })

  return output.filter(onlyUnique);
}