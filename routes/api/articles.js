const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");
//can be in index.js?
// Matches with "/api/articles"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

router.route("/articles")
  .get(articlesController.findAll)
  .post(articlesController.create);
  
// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;