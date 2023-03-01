const express = require("express");
const route = express.Router();

const loginController = require("../app/controllers/loginController");

route.get("/login", loginController.login);
module.exports = route;
