// Services URL
module.exports = {
  run: 'http://localhost:3000/api/repl',
  test: 'http://localhost:1337/api/test',
  create_namespace: function(path, io){
  	var nsp = io.of(path);
  	nsp.on('connection', (socket) => {
  	  console.log('a user has connected');

  	  socket.on('text change', (msg) => {
  	    nsp.emit('alter text', msg);
  	  });

  	  socket.on('append result', (msg) => {
  	    nsp.emit('alter result', msg);
  	  });

  	  socket.on('disconnect', () => {
  	    console.log('a user has disconnected');
  	  });
  	});
  }
};
