const ghpages = require("gh-pages");
require("dotenv").config();

ghpages.clean();
ghpages.publish(
  "dist",
  {
    user: {
      name: "jamesinaxx",
      email: "grassojames5@gmail.com",
    },
    message: "Built and deployed github pages",
    repo: `https://github.com/jamesinaxx/Clocks.git`,
    remote: "origin",
  },
  function (err) {
    console.error(err);
  }
);
