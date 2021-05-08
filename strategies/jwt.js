let Strategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
let fs = require("fs");

let opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = fs.readFileSync("certs/publicKey.pem");

let JwtStrategy = new Strategy(opts, function (payload, done) {
  console.log(payload);
  return done(null, false);
});

module.exports = { JwtStrategy };
