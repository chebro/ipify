const express = require('express');
const app = express();

const port = process.env.PORT;
const addr = process.env.HOST;

app.get('/', (req, res) => {
	if (req.headers['x-real-ip']) {
		res
			.status(200)
			.set('Content-Type', 'text/plain')
			.end(req.headers['x-real-ip'], 'utf8');
		return;
	}
	res
		.status(200)
		.set('Content-Type', 'text/plain')
		.end(req.ip, 'utf-8');
});

app.get('*', (_req, res) => {
	res.status(308).redirect('/');
});

app.listen(port, addr, () => {
	console.log(`listening on ${addr}:${port}`);
});

