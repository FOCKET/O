const readline = require('readline');
const { exec } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayPrompt() {
  process.stdout.write('\x1b[20mroot@rexcgod~# \x1b[1m');
}

function executeCommand(command, url, time, thread, rate) {
  if (command === 'mix') {
    console.log(`
\x1b[95m             ╔═╗╔╦╗╔╦╗╔═╗╔═╗╦╔═  ╔═╗╔═╗╔╗╔╔╦ ╗\x1b[0m
\x1b[93m       ╚╗    ╠═╣ ║  ║ ╠═╣║  ╠╩╗  ╚═╗║╣ ║║║ ║    ╔╝\x1b[0m
\x1b[92m        ‖    ╩ ╩ ╩  ╩ ╩ ╩╚═╝╩ ╩  ╚═╝╚═╝╝╚╝ ╩    ‖\x1b[0m
\x1b[95m        ‖            DDoS By RexcGod            ‖\x1b[0m
\x1b[91m        ╚═════╦═══════════════════════════╦═════╝\x1b[0m
\x1b[93m╗             ║     Attak Registereds     ║             ╔\x1b[0m
\x1b[92m╠═════════════╩═══════════════════════════╩═════════════╣\x1b[0m
\x1b[95m╚╗    TARGET       : [ ${url} ]               \x1b[0m
\x1b[93m ‖    TIME         : [ ${time} ]               \x1b[0m
\x1b[92m╔╝    PORT         : [ 443 ]                  \x1b[0m
\x1b[91m╠═══════════════════════════════════════════════════════╣\x1b[0m
\x1b[95m‖            Thanks For Buying And Use This.            ‖\x1b[0m
\x1b[92m╚                                                       ╝\x1b[0m`);
    const filePath = __dirname + '/mix.js';
    exec(`node ${filePath} ${url} ${time} ${thread} ${rate}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(stdout);

      // Tampilkan ASCII art "ATTACK SENT" setelah mix.js selesai dieksekusi

      displayPrompt();
    });
  } else {
    console.log(`Perintah ${command} belum diimplementasikan.`);
    displayPrompt();
  }
}

function displayHelp() {
  console.log('\x1b[35m');
  displayPrompt();
}

// ASCII art REXCGOD
console.log(`
  \x1b[35m
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡇⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠱⣄⠀⣀⣀⡤⣴⠶⠾⠿⢿⣿⡛⠛⠛⢻⠷⠶⠤⢤⣾⣀⠀⠀⠀⢀⠄⠀⠀⠀⠀⠀⢀⡾⠀⠀⠀⠀⠀
⢀⠀⠀⠀⠀⠀⠀⠀⢀⡤⢿⣿⡉⡀⠀⣈⣶⣄⣀⣸⣿⣄⣀⠀⡸⠀⠀⢀⣼⠀⠉⠛⠳⢶⣬⣄⡀⠀⠀⣠⣾⡟⠀⠀⠀⠀⠀⠀
⠀⠻⢦⣀⠀⠀⣠⡾⣻⣾⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣷⣶⣤⣖⣤⣏⣻⣿⣿⣿⣿⣿⣉⠀⠀⠀⠀⠀⢀⡄
⠀⠀⠀⢙⣿⣿⣿⣿⣿⣿⣿⠿⢟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢿⣻⣿⣷⣦⣤⠶⠋⠀
⠀⠀⣠⣿⣿⣿⠿⠛⠉⠁⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣷⣿⡿⢟⢛⡻⠀⠀⠀
⠀⠈⢀⣞⡛⠁⠀⠀⠀⠀⢴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⢸⣿⣿⣿⣇⠘⢀⠛⢟⡻⢿⣿⣿⣿⣿⣿⣶⣦⣤⣤⠤
⠀⠴⠋⠀⠀⠀⠀⠀⠀⢀⣾⣟⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣤⣀⣠⣴⣿⣿⣿⣿⡎⠁⠈⠀⠑⠋⠛⢿⣿⣿⡿⠉⠉⠁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡯⣾⣟⢿⣿⣿⣿⣿⣿⣿⠛⢏⠀⣿⣿⣿⡟⡿⡿⡿⣿⣿⡇⠀⠛⠳⣥⠀⠀⠙⣿⡿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⠀⠈⠙⠛⠄⠘⣩⣍⣃⣿⣿⣿⣧⣝⡛⠃⠁⠀⠀⢝⢻⣿⠀⠀⠀⠀⠀⢤⢠⡿⠁⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣷⠀⠀⠀⠀⠐⠈⣦⢹⣿⣿⣿⣿⡍⢴⣿⠇⠀⠀⠁⠀⣹⡏⠀⠀⠀⠀⠀⠀⠸⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡇⠀⠀⠀⠀⠀⠁⢾⠿⣛⣛⣛⡻⢷⠈⠀⠀⠀⠀⠀⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⢳⡀⠀⠀⠀⠀⠀⠀⠉⠛⠟⠛⠋⠀⠀⠀⠀⠀⠀⢀⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣀⣬⣿⣶⣤⣈⢳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⠁⠀⢀⣀⣤⣴⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣰⠟⠉⠀⠀⢈⠟⠻⠿⣶⣤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣲⣿⣵⠶⠿⢏⠉⠁⠈⠙⠷⣆⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⣴⣟⡉⠙⡿⠛⠻⠿⣿⠿⠿⢿⠛⠋⠉⠻⣆⠀⠀⠀⠑⠄⠀⠀⠀⠘⠂⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠀⠈⢹⠋⠒⠲⠴⣷⠤⠀⠈⣇⠀⠀⠀⠈⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠀
          𝙿𝚕𝚎𝚊𝚜𝚎 𝚝𝚢𝚙𝚎 "𝙷𝚎𝚕𝚙" 𝚝𝚘 𝚜𝚝𝚊𝚛𝚝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
`);

displayPrompt();

let url = '';
let time = '';
let thread = '';
let rate = '';

rl.on('line', (input) => {
  const args = input.split(' ');
  const command = args[0];

  if (command === 'help') {
    console.log('\x1b[93mMIX')
    displayHelp();
  } else if (command === 'mix') {
    if (args.length !== 5) {
      console.log('Format command mix salah. Gunakan format: mix <url> <time> <thread> <rate>');
      displayPrompt();
    } else {
      executeCommand(args[0], args[1], args[2], args[3], args[4]);
    }
  } else {
    console.log(`Perintah ${command} belum diimplementasikan.`);
    displayPrompt();
  }
});
