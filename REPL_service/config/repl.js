// Running Code in REPL
const repl = require('repl');
const fs = require('fs');
const net = require('net');
const stream = require('stream');

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

  var input = new stream.Readable();
  input._read = function noop() {
    input.push(code);
    input.push(null);
  };

  var output = new stream.Writable();
  var data = '';
  output._write = function noop(chunk, encoding, callback) {
      data += chunk;
      callback();
  };

    // input.on('end', () => {
    //   console.log(output);
    // setTimeout(() => {callback(data);}, 2000);
    // });
    var server = repl.start({input: input, output:output});

    output.on('close', () => {
      console.log('Received "exit" event from repl!');
      callback(data);
    });
  }
};
