const fs = require("fs");
const fetch = require("cross-fetch");

(async () => {
      try {
        const request = await fetch("https://swapi.co/api/starships/9/");
        if (request.status >= 400) {
          throw new Error("Bad response from server");
        }
        const user = await request.json();
    
        fs.writeFile(
          "./async-api-storage2.json",
          JSON.stringify(user),
          "utf-8",
          err => {
            if (err) {
              throw new Error(err);
            }
          }
        );
      } catch (err) {
        console.error(err);
      }
    })();