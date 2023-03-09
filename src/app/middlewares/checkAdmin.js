function checkAdmin(req, res, next) {
  var role = req.data.role;
  if (role === "admin") {
    next();
  } else {
    res.json("not permitted");
  }
}
module.exports = { checkAdmin };
