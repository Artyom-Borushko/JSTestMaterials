

const fs = require("fs")

const md = `

# SOME CONTENT WRITTEN

* WRITE FIRST LINE
second line

`
// writeFile  // ← for rewrite file
fs.appendFile("./assetsTest/readme.md", md.toString(), err => {
    if (err) {
        throw err
    }
    console.log("Content was written");
})