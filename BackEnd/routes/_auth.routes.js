var express = require('express');
var router = express.Router();
var {db, status} = require('../db');
var { validate_mail_phone, validatePassword } = require('../controllers/validate_input_auth');

router.post('/auth/signup',(req, res)=>{
try {
    var { user, password} = req.body;
    if(!user || !password) return res.status(401).json({code: '01' }) // user or password is null
    var result_user = validate_mail_phone(user);
    if(result_user == 3) return res.status(401).json({code: '02' }) // user invalid
    var result_password = validatePassword(password);
    if(!result_password) return res.status(401).json({code: '03' }) // password invalid
    // user and password ok
    
    res.send("OK");
} catch (error) {
    console.log(error)
}
});

module.exports = router;