const ShellSpawn = require("./ShellSpawn");

module.exports = async function (key, repeat = 1) {
  for (var i = 0; i < repeat; i++) {
    await ShellSpawn(`xdotool key ${key}`)
  }
}
