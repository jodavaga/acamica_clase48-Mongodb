const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({
        message: "Broker Agency API"
    })
})

app.listen('3000', () => console.log('Listening by port: 3000'));