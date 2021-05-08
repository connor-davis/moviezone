let mongoose = require("mongoose");
let { UserSchema } = require("../schemas");

let User = mongoose.model("User", UserSchema);

module.exports = User;
