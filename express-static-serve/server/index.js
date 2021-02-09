/* eslint-disable @typescript-eslint/no-var-requires */
let bodyParser = require('body-parser');
let express = require('express');
let app = express();
let mongoose = require('mongoose');
//configure bodyparser to hande the post requests
app.use(
    bodyParser.urlencoded({
        extended: false,
    }),
);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());
var port = process.env.PORT || 8080;
// Welcome message
app.get('/', (req, res) => res.send('Welcome to Express'));
// Launch app to the specified port
app.listen(port, function () {
    console.log('Running FirstRest on Port ' + port);
});

//Import routes
let apiRoutes = require('./routes');
//Use API routes in the App
app.use('/api', apiRoutes);

// ---

//import body parser
//import mongoose
//connect to mongoose
const dbPath = 'mongodb://127.0.0.1:27017/firstrest';
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const mongo = mongoose.connect(dbPath, options);
mongo.then(
    () => {
        console.log('connected');
    },
    (error) => {
        console.log(error, 'error');
    },
);
