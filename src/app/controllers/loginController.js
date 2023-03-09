const Account = require("../models/Account");
const jwt = require("jsonwebtoken");
class loginController {
  login(req, res, next) {
    res.render("signin");
  }
  signin(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    console.log(req.cookies.token);
    Account.findOne({
      username: username,
      password: password,
    })
      .then((data) => {
        if (data) {
          var token = jwt.sign({ _id: data._id }, "mk");
          /*
          token = sign -> data
          data = verify -> token
          */
          // console.log(data);
          // return res.json({
          //   message: "thanh cong",
          //   token: token,
          //  { httpOnly: true }
          // });
          res.cookie("token", token, { httpOnly: true, maxAge: 1800000 });
          // set the token cookie with a max age of 30 minutes (1800000 ms)
          // console.log(token);
          return res.status(200).json({ message: "Login success!" });
        } else {
          res.status(401).json({ message: "Invalid credentials!" });
          // res.render("index");
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json("loi server");
      });
  }
}
module.exports = new loginController();
