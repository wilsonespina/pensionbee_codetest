const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;

const app = express();

app.use(morgan('dev'));
app.use(express.static(`${__dirname}`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/*', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.listen(port, () => console.log(`Started on port: ${port}`));

module.exports = app;
