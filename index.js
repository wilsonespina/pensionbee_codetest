const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const docserver = require('docserver');

app.use(docserver({
  dir: __dirname + '/docs',  // serve Markdown files in the docs directory...
  url: '/'}                  // ...and serve them at the root of the site
));

app.listen(port, () => console.log(`Started on port: ${port}`));

module.exports = app;
