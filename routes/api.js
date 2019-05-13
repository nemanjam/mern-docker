const express = require('express');
const router = express.Router();

const requireJwtAuth = require('../middleware/requireJwtAuth');

router.get('/test', (req, res) => {
	res.send({test: "working"});
});

router.get('/api/user', requireJwtAuth, (req, res) => {
	res.send({user: req.user})
});

router.post('/api/feature', requireJwtAuth, (req, res) => {
	res.send({feature: 'This is a feature.'})
});

module.exports = router;
