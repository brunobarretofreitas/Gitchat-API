const http = require('http')
const express = require('express');
const morgan  = require('morgan');
const cors = require('cors');
const routes = require('./routes');
const mongoose = require('mongoose');

const { MONGOOSE_URL } = require('./config');

const app = express();
const server = http.Server(app);

mongoose.connect(MONGOOSE_URL, {
  useNewUrlParser: true
});

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
