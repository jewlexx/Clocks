const ghpages = require("gh-pages");

ghpages.clean();
ghpages.publish(
  "dist",
  {
    user: {
      name: "jamesinaxx",
      email: "grassojames5@gmail.com",
    },
    message: "Built and deployed github pages",
    repo: "https://github.com/jamesinaxx/Clocks.git",
    remote: "https://jamesinaxx@github.com/jamesinaxx/Clocks.git",
  },
  function (err) {
    console.error(err);
  }
);
