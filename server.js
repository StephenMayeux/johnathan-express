const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(logger('combined'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  const friends = ['Charlie', 'Gina', 'Nadia'];
  res.render('index', { friends });
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log('Express server running on port', PORT);
});
