let express = require("express");
let router = express.Router();

router.get("/", async (_, response) => {
  response.status(200).send("Welcome to the API.");
});

module.exports = router;
