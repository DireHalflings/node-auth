const router = require('express').Router();

const { seedDB, getUsers } = require('../controllers/users-controller');

router.get('/', getUsers);
router.post('/seedDB', seedDB);

module.exports = router;