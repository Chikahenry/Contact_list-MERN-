const express = require('express');
const router = express.Router();

//@route       GET api/auth
//@desc        Get logged user
//@access      Private
router.get('/', (req, res) => {
	res.send('Get logged in a user');
});

//@route      POST api/auth
//@desc       Auth User and Get token
//@access     Public
router.post('/', (req, res) => {
	res.send('log in user');
});

module.exports = router;
