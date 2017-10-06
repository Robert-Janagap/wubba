const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const database = require ('./config/database');

// Mongoose promise library
mongoose.Promise = global.Promise;

// Connecting to database
var connectDB = mongoose.connect(database.mlab, {
    useMongoClient: true,
});

// Database connection error handling
connectDB.then( () => {
    console.log('Connected to Database: ' + database.mlab);
}, ( err ) => {
    console.log('Error: ' + err);
});

// Server initialization
const app = express();
const port = process.env.PORT || 8080;

// Server routes
const Users = require('./routes/users');
const Todo = require('./routes/todo');

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Server middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Web urls
app.use('/users', Users);
app.use('/todo', Todo);

app.listen( port, () => {
    console.log('Server running on port: ' + port);
});