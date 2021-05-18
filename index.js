const express = require('express');
const app = express();

const port = process.env.PORT;
const addr = process.env.ADDR;

app.get('/', (req, res) => {
  if (req.headers['x-real-ip']) {
    res.status(200).end(req.headers['x-real-ip']);
    return;
  }
  res.status(200).end(req.ip);
});

app.get('*', (req, res) => {
  res.status(308).redirect('/');
})

app.listen(port, addr, () => {
  console.log(`listening on ${addr}:${port}`);
})

