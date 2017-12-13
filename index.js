// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');
const router = require('./router');

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth');

// App Setup
app.use(morgan('combined')); // morgan logging framework
app.use(bodyParser.json({ type: '*/*' }));
router(app);



// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);