const fs = require('fs');
const path = require('path');
const ini = require('ini');
let names = null


function initNames () {

  return new Promise((resolve, reject) => {
    const directoryPath = path.join(process.env.HOME, '.local/share/applications');
    // const filePattern = 'chrome-*-Default.desktop';

    names = []

    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        return;
      }

      // console.log(files)

      const matchingFiles = files.filter((file) => file.startsWith('chrome-') && file.endsWith('-Default.desktop'));

      // matchingFiles.forEach((file) => {
      for (let i = 0; i < matchingFiles.length; i++) {
        let file = matchingFiles[i]
        const filePath = path.join(directoryPath, file);
        let data = fs.readFileSync(filePath, 'utf8')
        if (err) {
          console.error('Error reading file:', err);
          return;
        }

        const parsedIni = ini.parse(data);
        const nameValue = parsedIni['Desktop Entry']['Name'];
        // console.log(`File: ${file}, Name: ${nameValue}`);

        if (names.indexOf(nameValue) > -1) {
          fs.unlinkSync(filePath)
        }
        else {
          names.push(nameValue)
        }
          
      }
        
      // });

      resolve()
    });
  })
    
}



module.exports = async function (name) {
  // if (!names)
  if (!names) {
    await initNames()
  }
  return (names.indexOf(name) > -1)
}