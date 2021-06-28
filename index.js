const express = require('express');
const app = express();

const port = process.env.PORT;
const addr = process.env.HOST;

app.set('trust proxy', true);

app.get('/', (req, res) => {
	res
		.status(200)
		.set('Content-Type', 'text/plain')
		.end(req.ip, 'utf-8');
});

app.get('*', (_req, res) => {
	res
		.status(308)
		.redirect('/');
});

app.listen(port, addr, () => {
	console.log(`listening on ${addr}:${port}`);
});

