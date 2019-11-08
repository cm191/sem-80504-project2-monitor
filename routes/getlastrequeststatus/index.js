const { Router } = require('express');
let fs = require('fs');
const logParser = require('../logParser/logParser');

const router = Router();

router.get('/', (req, res) => {
    logParser.getlastrequeststatus((status) => {
        res.send(`${status}`);
    });
});

module.exports = router;