const express = require("express");
const route = express.Router();

const detailProductController = require("../app/controllers/detailProductController");
route.get("/:name", detailProductController.detail_products);
module.exports = route;
