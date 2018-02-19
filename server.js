// Dependencies
// =============================================================
var express = require("express");


// Sets up the Express App
// =============================================================
var app = express();

// Bringing in the route handlers passing in app and path.

var PORT = 3000;
app.use(express.static("./"));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/sampler.html', function(err) {

  })
})
// Sets up the Express app to handle data parsing
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
