const fs = require('fs');
const path = require('path');
const ini = require('ini');
let names = null


function initNames () {
  // if (names !== null) {
  //   return false
  // }

  return new Promise(async (resolve, reject) => {
    const directoryPath =   
     path.join(process.env.HOME, '.local/share/applications');
    // const filePattern = 'chrome-*-Default.desktop';

    names = []

    let files =fs.readdirSync(directoryPath)

    // console.log(files)

    const matchingFiles = files.filter((file) => file.startsWith('chrome-') && file.endsWith('-Default.desktop'));

    // matchingFiles.forEach((file) => {
    for (let i = 0; i < matchingFiles.length; i++) {
      let file = matchingFiles[i]
      const filePath = path.join(directoryPath, file);

      // console.log(filePath)
      if (await isFileModifiedMoreThanDays(filePath)) {
        console.log('Remove: ' + filePath)
        fs.unlinkSync(filePath, true)
        continue
      }

      let data = fs.readFileSync(filePath, 'utf8')
      // if (err) {
      //   console.error('Error reading file:', err);
      //   return;
      // }

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
    
}


// Function to check if the file modification time is more than 3 days ago
function isFileModifiedMoreThanDays(filePath, days = 7) {
  return new Promise((resolve, reject) => {
      fs.stat(filePath, (err, stats) => {
          if (err) {
              // Handle error (e.g., file doesn't exist)
              console.error("Error accessing the file:", err);
              return reject(err);
          }

          const now = new Date();
          const mtime = new Date(stats.mtime);
          const diffDays = (now - mtime) / (1000 * 60 * 60 * 24);


          console.log(filePath, mtime, diffDays);

          if (diffDays > days) {
              resolve(true); // File was modified more than 3 days ago
          } else {
              resolve(false); // File was modified within the last 3 days
          }
      });
  });
}

// initNames()

module.exports = async function (name) {
  // return false
  
  // if (!names)
  if (names === null) {
    await initNames()
  }

  // console.log(names.length, names)
  if (names.length === 0) {
    
    return false
  }

  // console.log(names.indexOf('日常生活 Life'))
  // throw "Test"
  return (names.indexOf(name) > -1)
}