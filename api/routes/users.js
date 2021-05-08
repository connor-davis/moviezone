let { Router } = require("express");
let passport = require("passport");
let router = Router();
let { User } = require("../models");

router.post(
  "/update",
  passport.authenticate("jwt", { session: false }),
  async (request, response) => {
    let body = request.body;

    let user = await User.findOne({ userEmail: body.userEmail });

    if (!user)
      return response.status(200).json({
        reason: "user-not-found",
        message: "The requested user does not exist.",
      });
    else {
      await User.updateOne(
        { userEmail: user.userEmail },
        body,
        async (error, _) => {
          if (error)
            return response.status(200).json({ reason: "server-error", error });
          else {
            let updatedUser = await User.findOne({ userEmail: user.userEmail });
            return response.status(200).json({
              success: "user-updated",
              data: updatedUser.toJSON(),
            });
          }
        }
      );
    }
  }
);

module.exports = router;
