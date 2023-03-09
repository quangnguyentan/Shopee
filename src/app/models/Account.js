const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Account = new Schema(
  {
    username: String,
    password: String,
    role: String,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Account", Account);
