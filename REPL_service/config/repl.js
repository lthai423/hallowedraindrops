// Running Code in REPL
const repl = require('repl');
const fs = require('fs');
const net = require('net');
var connections = 0;

module.exports = {
  runCode: (code) => {

    net.createServer((socket) => {
      connections += 1;
      repl.start({
        prompt: 'Node.js via TCP socket> ',
        input: socket,
        output: socket
      }).on('exit', () => {
        socket.end();
      });
    }).listen(5001, () => {
      console.log('TCP server listening on 5001');
    });
    // var result = fs.createWriteStream('./test.txt');
    // var myEval = (cmd, context) => {

    // };
    // var server = repl.start({eval: 'x = 4;', output: result});
    // console.log(result);
    // server.on ('exit', () => {
    //   console.log('Received "exit" event from repl!');
    //   process.exit();
    //   });
  }

};
