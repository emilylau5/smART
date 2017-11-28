const router = require("express").Router();
const postController = require("../../controllers/postController");

router.route("/")
  .get(postController.findAll)
router.route("/post")
  .post(postController.create)

module.exports = router