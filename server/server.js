const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const pg = require('pg');

const port = process.env.PORT || 5000;

const app = express();
const video = require('./routes/videos.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 // needed for react requests
app.use(express.static('build'));

// Then use it before your routes are set up:
app.use(cors());

/** ---------- ROUTES ---------- **/
app.use('/video', video)

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
