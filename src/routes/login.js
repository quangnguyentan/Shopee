const express = require("express");
const route = express.Router();

const loginController = require("../app/controllers/loginController");
route.post("/login", loginController.signin);
route.get("/login", loginController.login);
module.exports = route;
