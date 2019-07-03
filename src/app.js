const express = require('express');

// init
const app = express();

// config
const port = 3000;
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// controller
const home = require('./controllers/home').handler;
const error = require('./controllers/error').handler;
const notFound = require('./controllers/not-found').handler;

// static
app.use(express.static(__dirname + '/public'));

// resource routing
app.get('/', home);

// not found handling
app.use(notFound);

// error handling
app.use(error);

// starting
if (!module.parent) {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}

module.exports = app;