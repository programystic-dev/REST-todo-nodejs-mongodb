const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Task = require('./api/models/todoListModel');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes');
routes(app);

app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);