const router = require("express").Router();
const userRoutes = require("./user");
const emailRoutes = require("./email");

router.use("/user", userRoutes)
router.use("/email", emailRoutes)

module.exports = router;