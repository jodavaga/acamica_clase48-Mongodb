const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Mi primera ruta')
});

router.get('/main', (req, res) => {
    res.send(`otra ruta perteneciente a /test: ${req.path}`)
});

module.exports = router;