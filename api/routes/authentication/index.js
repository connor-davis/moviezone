let { Router } = require("express");
let router = Router();

let loginRoutes = require("./login");
let registerRoutes = require("./register");

router.use("/login", loginRoutes);
router.use("/register", registerRoutes);

module.exports = router;
