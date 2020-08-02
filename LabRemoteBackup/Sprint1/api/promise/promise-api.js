const fs = require("fs");
const fetch = require("cross-fetch");

fetch("https://swapi.co/api/starships/9/")
  .then(response => {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then(response => {
    fs.writeFile(
      "./promise-api-storage.json",
      JSON.stringify(response),
      "utf-8",
      err => {
        if (err) {
          throw new Error(err);
        }
      }
    );
  });