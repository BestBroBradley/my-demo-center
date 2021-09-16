
const router = require("express").Router();
const userController = require("../../controllers/userController");

router
  .route("/")
  .post(userController.create)
  .get(userController.getall)

router
  .route("/authenticate")
  .post(userController.postauth)

router
  .route("/login/:email/:password")
  .get(userController.login)

router
  .route("/:id")
  .get(userController.authenticate)

module.exports = router;