const express = require('express');

const cors = require('cors');

const app = express();

const bookRouter = require('./router/book.router');

app.use(cors());

app.use(bookRouter);

app.set('port', 2000);

module.exports = app;
