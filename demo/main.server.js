const [express, request] = [require('express'), require('request')];

const app = express();
app.use(express.static(__dirname));

app.post('/signin', (req, res, next) => {
	const path ='/auth';
	authenticate(req, res, next);
});

app.get('/restricted', (req, res, next) => {
	const path = '/session';
	authenticate(req, res, next, path); // when we get a request to restricted, we are sending it off to our authenticate to its session route
});

const authServer = 'http://localhost:4000';


// a.pipe(b) ----> returns b
function authenticate (req, res, next, path) {
 	let response = req.pipe(request.get(authServer + path));
	// piping it into a write-able stream
	response.on('response', () => {
		const statusCode = response.responseContent.statusCode;

		if(statusCode === 200) {
			// let the user through
			res.sendFile('./restricted.html', {root: '.'}); // give it a root
		} else {
			res.redirect('/');
		}
		
	});

}

app.listen(3000, () => {console.log('listening on 3000')});

