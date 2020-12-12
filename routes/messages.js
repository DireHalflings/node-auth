const router = require('express').Router();
const { verifyToken } = require('../controllers/auth-controller');

router.get('/', verifyToken, (req, res) => res.json({
    message: { 
        reciever: "5fc71b9ab50a97ba4cb7c6e9",
        sender: "5fc71b9ab50a97ba4cb7c6ea",
        message: "lo"
    }
}));

module.exports = router;