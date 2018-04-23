const router = require("express").Router();
const articleRoutes = require("./articles");

// Article routes
router.use("/articles", articleRoutes);

module.exports = router;
/*
const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
*/