const { Router } = require('express');
let fs = require('fs');
const logParser = require('../logParser/logParser');

const router = Router();

router.get('/', (req, res) => {
    logParser.getlastrequesttime((time) => {
        let ts = parseInt(time);
        let date = new Date(ts);
        res.send(date.toString());
    });
});

module.exports = router;