const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const testRouter = require('./routes/primeraRouter');

const app = express();

// Morgan - console print log request
app.use(morgan('dev'));
app.use(express.json());

// First endpoint
app.get('/', (req, res) => {
    res.send({
        message: "Broker Agency API"
    })
});

// First router from /test
app.use('/test', testRouter);

// Mongoose connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Mongo Database connected');

}).catch((e) => {
    console.log('Database connection failed:', e);
});

// Listening
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening by port: ${PORT}`));