const router = require("express").Router();
const emailController = require("../../controllers/emailController");

router
  .route("/:email")
  .get(emailController.getmail)

module.exports = router