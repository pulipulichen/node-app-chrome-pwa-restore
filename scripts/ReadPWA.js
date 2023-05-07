const XLSX = require("xlsx");

const fs = require("fs")

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

module.exports = function () {
  var ods = fs.readFileSync('./APP ICON LIST.ods')
  var workbook = XLSX.read(ods)
  // console.log(workbook)

  const worksheet = workbook.Sheets['list'];
  const data = XLSX.utils.sheet_to_json(worksheet,{header:1});

  let output = []

  data.forEach((row, i) => {
    if (i === 0) {
      return false
    }
    let target = row[3]
    let script = row[5]
    // console.log(target)
    if (!target || target.startsWith('http') === false) {
      return false
    }
    output.push({target, script})
  })

  return output.filter(onlyUnique);
}