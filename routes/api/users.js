const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/current")
  .post(userController.currentUser)
router.route("/all")
  .get(userController.findAll)
router.route("/new")
  .post(userController.createUser)


module.exports = router
