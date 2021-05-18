const express = require('express');
const app = express();

const port = process.env.PORT;
const addr = process.env.ADDR;

app.get('/', (req, res) => {
  req.ipReal = req.ip;
  if (req.headers['x-real-ip']) req.ipReal = req.headers(['x-real-ip']);
  res.send(req.ipReal);
});

app.listen(port, addr, () => {
  console.log(`listening on ${addr}:${port}`);
})

