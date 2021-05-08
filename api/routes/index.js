let express = require("express");
let router = express.Router();
let authenticationRoutes = require("./authentication");
let usersRoutes = require("./users");

router.get("/", async (_, response) => {
  response.status(200).send("Welcome to the API.");
});

router.use("/authentication", authenticationRoutes);
router.use("/users", usersRoutes);

module.exports = router;
