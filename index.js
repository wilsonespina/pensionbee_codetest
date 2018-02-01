const express = require('express');
const docserver = require('docserver');
const port = process.env.PORT || 7000;
const app = express();

app.use(docserver({
  dir: __dirname + '/content',
  url: '/content/'}
));

app.get('/*', (req, res) => res.redirect('/content/about-page'));

app.listen(port, () => console.log(`Started on port: ${port}`));

module.exports = app;
