const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');

function bash() {
   process.stdout.write("prompt > ")
   process.stdin.on("data",(data) => {
      let args = data.toString().trim()
      let cmd = args.split(" ").shift();
      args = args.split(" ").slice(1).join(" ")
      commands[cmd] ? commands[cmd](print, args) : print(`command not found: ${cmd}`)
   })
}

function print(output) {
   process.stdout.write(output)
   process.stdout.write("\nprompt > ")
}

bash();
module.exports = {
   print,
   bash,
};
