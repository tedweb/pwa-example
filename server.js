const express = require('express');
const app = express();
const port = 8080;
const path = './dist/pwa-example/';

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

app.use(express.static(path));

app.get('/*', function(req, res) {
    //res.sendFile('index.html', {root: path});
    res.sendFile('index.html', {root: path});
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
