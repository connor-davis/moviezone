"use strict";
let dotenv = require("dotenv");
dotenv.config();

let { json, urlencoded } = require("body-parser");
let express = require("express");
let next = require("next");
let passport = require("passport");
let compression = require("compression");
let cors = require("cors");
let mongoose = require("mongoose");

let dev = process.env.NODE_ENV !== "production";
let app = next({ dev });
let handle = app.getRequestHandler();

let { routes } = require("./api");

let { User } = require("./api/models");

let { JwtStrategy } = require("./strategies/jwt");

app
  .prepare()
  .then(() => {
    let server = express();

    server.use(cors());
    server.use(json());
    server.use(urlencoded({ extended: true }));
    server.use(compression());
    server.use(passport.initialize());

    server.use("/api", routes);

    mongoose.connect(
      "mongodb://localhost:27017/moviezone",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
      (error) => {
        if (error) console.log(error);
        console.log("> MongoDB Connected.");
      }
    );

    server.get("*", (request, response) => {
      return handle(request, response);
    });

    passport.use(JwtStrategy);

    passport.serializeUser(function (user, done) {
      done(null, user.userEmail);
    });

    passport.deserializeUser(function (userEmail, done) {
      User.findOne({ userEmail }, function (err, user) {
        done(err, user);
      });
    });

    server.listen(3000, async () => {
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch((error) => {
    console.error(error.stack);
    process.exit(1);
  });
