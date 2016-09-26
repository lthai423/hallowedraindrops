// Running Code in REPL
const repl = require('repl');
const fs = require('fs');
const net = require('net');
var connections = 0;

module.exports = {
  runCode: (code, callback) => {

    // net.createServer((socket) => {
    //   connections += 1;
    //   repl.start({
    //     prompt: 'Node.js via TCP socket> ',
    //     input: socket,
    //     output: socket
    //   }).on('exit', () => {
    //     socket.end();
    //   });
    // }).listen(5001, () => {
    //   console.log('TCP server listening on 5001');
    // });
    var result = '';
    process.stdout.on('data', (data) => {
      result += data.toString();
    });
    process.stdout.on('end', () => {
      callback(result);
    });
    var output = fs.createWriteStream(__dirname + '/test.txt');
    var input = fs.createReadStream(__dirname + '/input.txt');
    // var myEval = (cmd, context) => {

    // };
    // process.stdout.pipe(result);
    var server = repl.start({input: input, output:output});
    console.log(result);
    server.on ('exit', () => {
      console.log('Received "exit" event from repl!');
      process.exit();
      });
  }

};
