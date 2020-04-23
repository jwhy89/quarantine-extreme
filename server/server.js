const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
// const cors = require('cors');

const port = process.env.PORT || 5000;

const app = express();

// const corsOptions = {
//   origin: '*',
//   optionsSuccessStatus: 200,
// };

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// app.options('*', cors(corsOptions));
// app.use(cors(corsOptions));

const video = require('./routes/videos.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 // needed for react requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/video', video)

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
