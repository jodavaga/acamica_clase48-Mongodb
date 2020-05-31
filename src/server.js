const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        message: "Broker Agency API"
    })
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening by port: ${PORT}`));