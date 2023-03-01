const express = require("express");
const morgan = require("morgan");
const app = express();
const handlebars = require("express-handlebars");
// const methodOverride = require("method-override");
const path = require("path");
const bodyParser = require("body-parser"); 
const port = 3000;
const SortMiddleware = require("./app/middlewares/sortMiddleware");
const route = require("./routes");
const db = require("./config/db");
//Connect to db
db.connect();
app.use(express.static("./src/public"));
app.use(
  express.urlencoded({
    extended: true,
  })
); // midleware để xử lí dữ liệu gửi lên từ form submit lên khi sử dụng post
app.use(express.json()); // gửi từ code JS khi sử dụng thư viện HMLHttpRequest, fetch, axios
// app.use(morgan("combined"));
// app.use(methodOverride("_method"));
app.use(SortMiddleware);
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: require("./helper/handlerbars"),
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "views"));
// Route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
