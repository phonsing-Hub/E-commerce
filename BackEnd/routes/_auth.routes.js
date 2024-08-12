var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var { db, status } = require("../db");
var {
  validate_mail_phone,
  validatePassword,
  generateID,
} = require("../controllers/validate_input_auth");

router.post("/auth/signup", async (req, res) => {
  try {
    var { user, password } = req.body;
    if (!user || !password) return res.status(401).json({ code: "01" }); // user or password is null
    var result_user = validate_mail_phone(user);
    if (result_user == 3) return res.status(401).json({ code: "02" }); // user invalid
    var queryuser = db('ecm_auth').count('* as count');
    result_user == 1 ? queryuser.orWhere({ email: user }) : queryuser.orWhere({ phone: user });
    var checkuser = await queryuser;
    if (checkuser[0].count) return res.status(401).json({ code: "03" }); // user is active
    var result_password = validatePassword(password);
    if (!result_password) return res.status(401).json({ code: "04" }); // password invalid
    // user and password ok
    var hashedPassword = await bcrypt.hash(password, 10);
    var result_id = await db('ecm_auth').count('* as count');
    var id = generateID(result_id[0].count + 1);
    // create user
    var newuser = await db('ecm_auth').returning('id').insert({
        ecm_id: id,
        mail: result_user == 1 ? user : null,
        phone: result_user == 2 ? user : null,
        password: hashedPassword
    });
    res.status(201).json({code: "99", newuser}); // create success
  } catch (error) {
    //console.log(error);
    res.status(500).json({ code: "00"}); // Internal Server Error
  }
});

module.exports = router;
