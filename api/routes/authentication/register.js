let { Router } = require("express");
let { User } = require("../../models");
let router = Router();
let uuid = require("uuid");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");

router.post("/", async (request, response) => {
  let body = request.body;

  bcrypt.hash(body.password, 1024, (error, hashedPassword) => {
    if (error) return response.status(500).json({ error });
    else {
      let user = new User({
        userId: uuid.v4(),
        userFirstName: body.firstName,
        userLastName: body.lastName,
        userUsername: body.username,
        userEmail: body.email,
        userPassword: hashedPassword,
      });

      try {
        user.save();

        let token = jwt.sign(
          {
            userId: user.userId,
            userEmail: user.userEmail,
          },
          "secret",
          {
            expiresIn: 86400 * 30,
          }
        );

        return response.status(200).json({
          success: "user-registered",
          data: user.toJSON(),
          authenticationToken: token,
        });
      } catch (error) {
        return response.status(500).json({
          error,
        });
      }
    }
  });
});

module.exports = router;
