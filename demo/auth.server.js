const [express, request] = [require('express'), require('request')];

const app = express();
const user = {
	username: 'dog',
	pw: 'dog',
	signedIn: false
}

app.get('/auth', (req, res) => {
	let data = '';
	req.on('data', (chunk) => {
		data += chunk;
	});
	req.on('end', () => {
		// data is finished
		let creds = data.split('&').map(el => el.split('=')[1]);
		// output: [[username , 'cat', [pw, 'dog']]
		if(creds[0] === user.username && creds[1] === user.pw) {
			user.signedIn = true;
			res.statu(200).end();
		} else {
			res.status(400).end();
		}
	});
});

app.get('/session', (req, res) => {
	req.on('data', () => {})
	.on('end', () => {
		if(user.signedIn) {
			res.status(200).end();
		} else {
			res.status(400).end();
		}
	})
})

app.listen(4000, () => {
	console.log('auth listening to 4000');
});