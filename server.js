// imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const messageRouter = require('./routes/messages');

const path = require('path');


// configs
require('dotenv').config();
require('./config/db');

// server
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/message', messageRouter);

app.get('*', (req, res) => {
    console.log(__dirname+'/client/build/index.html');
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// spin up
app.listen(port, () => console.log(`Server up and running on port ${ port }!`));