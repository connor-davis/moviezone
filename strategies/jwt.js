let Strategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

let { User } = require("../api/models");

let opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";

let JwtStrategy = new Strategy(opts, (payload, done) => {
  User.findOne({ userId: payload.userId }, (err, user) => {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});

module.exports = { JwtStrategy };
