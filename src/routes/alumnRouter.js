const express = require('express');
const router = express.Router();

const Alumn = require('../db/models/Alumn');

router.get('/alumns', async (req, res) => {
    try {
        const alumns = await Alumn.find({});
        res.send(alumns);
    }catch (e) {
        res.status(500).send(e);
    }
});

router.post('/alumns', async (req, res) => {
    const alumnData = req.body;
    const alumn = new Alumn(alumnData);
    try {
        await alumn.save();
        res.status(201).send(alumn);
    }catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;