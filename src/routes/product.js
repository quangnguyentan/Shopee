const express = require("express");
const route = express.Router();
const sortMiddleware = require("../app/middlewares/sortMiddleware");
const productsController = require("../app/controllers/productControllers");

route.get("/", productsController.index);
route.get("/details", productsController.details);

module.exports = route;
