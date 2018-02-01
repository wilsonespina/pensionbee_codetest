const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const docserver = require('docserver');
const port = process.env.PORT || 4000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(docserver({
  dir: __dirname + '/content',  // serve Markdown files in the docs directory...
  url: '/content/'}             // ...and serve them at the root of the site
));

// app.use(express.static(`${__dirname}`));
// app.get('/*', (req, res) => res.sendFile(`${__dirname}/template.html`));

app.listen(port, () => console.log(`Started on port: ${port}`));

module.exports = app;
