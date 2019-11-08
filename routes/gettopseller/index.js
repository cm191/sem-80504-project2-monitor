const { Router } = require('express');
let fs = require('fs');
const logParser = require('../logParser/logParser');

const router = Router();

router.get('/', (req, res) => {
    logParser.gettopseller((topSeller) => {
        res.send(`${topSeller}`);
    });
});

module.exports = router;