const express = require('express');
const app = express();

app.use(express.static(__dirname + '../client'));
app.use(express.static(__dirname + '../node_modules'));

app.get('/', (req, res) => {
  res.send('yippee!');
});

app.listen(5000, () => console.log('Example app listening on port 3000!'))