let mongoose = require("mongoose");
let { UserSchema } = require("api/schemas");

let User = mongoose.model("User", UserSchema);

module.exports = User;
