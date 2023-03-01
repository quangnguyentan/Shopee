const productRouter = require("./product");
const detailProductRouter = require("./detail");
const loginRouter = require("./login");
function route(app) {
  app.use("/", productRouter);
  app.use("/detail", detailProductRouter);
  app.use("/buyer", loginRouter);
}

module.exports = route;
