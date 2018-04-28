const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true })); //true }));
app.use(bodyParser.json());
// Serve up static assets
// app.use(express.static("client/build"));
app.use(express.static("client/build"));
// Add routes, both API and view
//require("./controllers/articlesController.js")(app);
app.use(routes);


//] assert.js:42
//[0]   throw new errors.AssertionError({
//[0]   ^
//[0]
//[0] AssertionError [ERR_ASSERTION]: mongoose.Promise must be a function, got undefined
//mongoose.Promise = global.promise;

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytimes")
	/*
 The `useMongoClient` option is no longer necessary in mongoose 5.x, please remove it.
	,
	{
		useMongoClient:true
	});
	*/
// axios is like ajax
//under network shows query when hit submit
/*
        app.get("/api/articles", function (req, res) { 
 // findAll: function(req, res) {
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  //}
})
*/
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
