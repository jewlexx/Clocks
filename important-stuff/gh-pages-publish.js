const ghpages = require("gh-pages");

ghpages.clean();
ghpages.publish("dist", function (err) {
  console.error(error);
});
