const router = require("express").Router();
const postController = require("../../controllers/postController");

router.route("/home")
  .get(postController.findAll)
router.route("/new")
  .post(postController.createPost)
router.route("/like")
  .post(postController.likePost)

module.exports = router