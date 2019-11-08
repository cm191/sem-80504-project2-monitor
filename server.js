const express = require('express');
const server = express();
const port = 80;

const routes = require('./routes');

server.use('/', routes);

server.listen(port);
