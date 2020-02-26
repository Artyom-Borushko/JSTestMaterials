

// READ FROM THE FILE

const fs = require("fs");

fs.readFile("./assetsTest/readme.md", "UTF-8", (err, text) => {
  if (err) {
    console.log(`ERROR OCCURRED: ${err.message}`);
    process.exit;
  }
  console.log("File content read");
  console.log(text);
});
