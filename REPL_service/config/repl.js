// Running Code in REPL
const repl = require('repl');
const fs = require('fs');
const net = require('net');
var connections = 0;

module.exports = {
  /**
    * @name runCode
    * @desc Runs the javascript code in a REPL instance, requested from POST to api
    * @param {code, callback} code is the request javascript code, callback returns the output data
    * @returns {nothing}
    */
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
    fs.writeFile(__dirname + '/input.txt', code, (err) => {
      if (err) throw err;

      var output = fs.createWriteStream(__dirname + '/output.txt');
      var input = fs.createReadStream(__dirname + '/input.txt');
      var server = repl.start({input: input, output:output});

      server.on ('exit', () => {
        console.log('Received "exit" event from repl!');
        fs.readFile(__dirname + '/output.txt', 'utf8', (err, data) => {
          if (err) throw err;
          callback(data);
        });
      });
  });
  }
};
