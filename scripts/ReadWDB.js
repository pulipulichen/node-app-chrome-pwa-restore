const XLSX = require("xlsx");

const fs = require("fs")

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

module.exports = function () {
  var ods = fs.readFileSync('./APP ICON LIST.ods')
  var workbook = XLSX.read(ods)
  // console.log(workbook)

  const worksheet = workbook.Sheets['wdb'];
  const data = XLSX.utils.sheet_to_json(worksheet,{header:1});

  let output = []

  data.forEach((row) => {
    row.forEach((value) => {
      if ((typeof(value) === 'string') && 
        (value.startsWith('https://wd.pulipuli.info/')
          || value.startsWith('https://pulipulichen.github.io/')
          || value.startsWith('https://blog.pulipuli.info')) ) {
        output.push(value)
      }
    })
  })

  return output.filter(onlyUnique);
}