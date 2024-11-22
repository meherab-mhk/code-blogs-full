const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login, async(req, res) => {
    const user = req.body;
    console.log(user);
    res.send(user);
});

module.exports = router;