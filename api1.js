const axios = require("axios");
const fs = require("fs");
const fetch = require("cross-fetch");

axios({
  method: "get",
  url: "https://swapi.co/api/starships/9/",
  responseType: "stream"
})
  .then(response => {
    let writeStream = fs.createWriteStream("./api-storage.json");
    response.data.pipe(writeStream);
  })
  .catch(error => {
    if (error) {
      throw new Error(error);
    }
  });

//  const fetch = require("cross-fetch");

// fetch("https://swapi.co/api/starships/9/")
//   .then(response => {
//     if (response.status >= 400) {
//       throw new Error("Bad response from server");
//     }
//     return response.json();
//   })
//   .then(response => {
//     fs.writeFile(
//       "./api-storage.json",
//       JSON.stringify(response),
//       "utf-8",
//       err => {
//         if (err) {
//           throw new Error(err);
//         }
//       }
//     );
//   });

// const fetch = require("cross-fetch");

// (async () => {
//   try {
//     const request = await fetch("https://swapi.co/api/starships/9/");
//     if (request.status >= 400) {
//       throw new Error("Bad response from server");
//     }
//     const user = await request.json();

//     fs.writeFile(
//       "./api-storage2.json",
//       JSON.stringify(user),
//       "utf-8",
//       err => {
//         if (err) {
//           throw new Error(err);
//         }
//       }
//     );
//   } catch (err) {
//     console.error(err);
//   }
// })();
