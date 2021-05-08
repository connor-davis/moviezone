let mongoose = require("mongoose");
const { User } = require("../models");
let { Schema } = mongoose;

let UserSchema = new Schema({
  userId: String,
  userFirstName: String,
  userLastName: String,
  userUsername: String,
  userEmail: String,
  userPassword: String,
});

module.exports = UserSchema;
