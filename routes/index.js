const { Router } = require('express');
const router = Router();

const gettotal = require('./gettotal');
const gettopseller = require('./gettopseller');
const getrequestcount = require('./getrequestcount');
const getlastrequeststatus = require('./getlastrequeststatus');
const getlastrequesttime = require('./getlastrequesttime');

router.get('/', (req, res) => {
	res.send('hello\n');
});

router.use('/gettotal', gettotal);
router.use('/gettopseller', gettopseller);
router.use('/getrequestcount', getrequestcount);
router.use('/getlastrequeststatus', getlastrequeststatus);
router.use('/getlastrequesttime', getlastrequesttime);

module.exports = router;
