const http = require('http')
const express = require('express');
const morgan  = require('morgan');
const cors = require('cors');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();
const server = http.Server(app);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-1faci.mongodb.net/omnistack8?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
