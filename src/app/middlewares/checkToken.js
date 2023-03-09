const jwt = require("jsonwebtoken");
const Account = require("../models/Account");
function checkToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    // Nếu không có token, chuyển hướng người dùng đến trang chủ
    return res.redirect("/buyer/login");
  } else {
    try {
      const decoded = jwt.verify(token, "mk");
      console.log(decoded);
      Account.findOne({ _id: decoded }).then((data) => {
        if (data) {
          req.data = data;
          next();
        }
      });
    } catch (err) {
      // Nếu token không hợp lệ, chuyển hướng người dùng đến trang chủ
      return res.redirect("/buyer/login");
    }
  }
}
module.exports = { checkToken };
