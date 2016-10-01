// Running Code in REPL
const repl = require('repl');
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
  runCode: (code, path, callback) => {
    /**
      * @name input
      * @desc Push to-be-evaluated code to readable stream, ready by REPL.
      */
    var input = new stream.Readable();
    input._read = function noop() {
      input.push(code);
      input.push(null);
    };

    /**
      * @name output
      * @desc Writable stream written by REPL while evaluating input code.
      */
    var output = new stream.Writable();
    var data = '';
    output._write = function noop(chunk, encoding, callback) { // why is it called NOOP? 
        data += chunk;
        callback();
    };

    /**
      * @name repl.start
      * @desc Sends a Readable stream to the repl server and outputs a writeable stream after eval
      * @param {input, output} readable and writable streams
      * @returns {nothing}
      */
    var server = repl.start({input: input, output:output, terminal: false});

    // function initializeContext(context, path) {
    //   _.extend(context, cache[path]);
    // };

    // Returns data to the callback once REPL is done with code
    // Will not respond with data to client-side if callback is removed.
    server.on('exit', () => {
      console.log('Received "exit" event from repl!');
      data = data.replace(/\.\.\.\ /g, '');
      data = data.replace(/\>\ +/g, ">");
      console.log(JSON.stringify(data));
      callback(JSON.stringify(data));
    });

    // initializeContext(server.context, path);
    // server.on('reset', initializeContext);
  }
};


