// Services URL
module.exports = {
  REPL: 'http://localhost:3000/api/repl',
  create_namespace: function(path, io){
    console.log('entered into services for namespace creation');
  	var nsp = io.of(path);
  	nsp.on('connection', (socket) => {
  	  console.log('a user has connected');

  	  socket.on('text change', (msg) => {
  	    console.log('msg value is: ', msg);
  	    nsp.emit('alter text', msg);
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
