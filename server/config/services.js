// Services URL
var queue = [];
var DiffMatchPatch = require('diff-match-patch');

DiffMatchPatch.DIFF_DELETE = -1;
DiffMatchPatch.DIFF_INSERT = 1;
DiffMatchPatch.DIFF_EQUAL = 0;

var orig = '',
    change = '',
    merged = '';

var dmp =  new DiffMatchPatch();
var mergeText = (orig, change) => {
  var diff = dmp.diff_main(orig, change);
  var patches = dmp.patch_make(diff);
  return dmp.patch_apply(patches, merged);
};

module.exports = {
  REPL: 'http://0.0.0.0:4000/api/repl',
  create_namespace: (path, io) => {
  	var nsp = io.of(path);
  	nsp.on('connection', (socket) => {
  	  console.log('a user has connected');

  	  socket.on('text change', (msg) => {
  	    console.log('msg value is: ', msg);
        orig = orig || msg;
        merged = merged || orig;
        queue.push(msg)
        while (queue.length){
          merged = mergeText(orig, queue.shift())[0];
          console.log('ORIG', orig);
          nsp.emit('alter text', merged);
        };
        orig = merged;
  	  });

  	  socket.on('append result', (msg) => {
  	    console.log('append result is: ', msg);
  	    nsp.emit('alter result', msg);
  	  });

  	  socket.on('disconnect', () => {
  	    console.log('a user has disconnected');
  	  });
  	});
  }
};

