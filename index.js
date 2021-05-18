const express = require('express');
const app = express();

const port = process.env.PORT;
const addr = process.env.ADDR;

app.get('/', (req, res) => {
  if (req.headers['x-real-ip']) res.end(req.headers['x-real-ip']);
  res.end(req.ip);
});

app.listen(port, addr, () => {
  console.log(`listening on ${addr}:${port}`);
})

