const axios = require("axios");
const fs = require("fs");

axios({
  method: "get",
  url: "https://swapi.co/api/starships/9/",
  responseType: "stream"
})
  .then(response => {
    let writeStream = fs.createWriteStream("./axios-api-storage.json");
    response.data.pipe(writeStream);
  })
  .catch(error => {
    if (error) {
      throw new Error(error);
    }
  });