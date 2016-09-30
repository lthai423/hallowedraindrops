const morgan = require('morgan');
const bodyParser = require('body-parser');


module.exports = (app, express) => {
  //Print all of the requests to the server
  app.use(morgan('dev'));

  //Reads information from forms ands puts it in a body object
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // serves static files
  var public_dirs = [
  	'/../../client',
  	'/../../client/styling/index/'
	];
  public_dirs.forEach((path) => app.use(express.static(__dirname + path)));

  // Add headers
  app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
  });

};
