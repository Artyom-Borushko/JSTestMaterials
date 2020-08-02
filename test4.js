const fetch = require("cross-fetch");

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

const url = "https://jsonplaceholder.typicode.com/todos";

// function fetchTodo() {
//   console.log("Request started");
//   return delay(2000)
//     .then(() => {
//       return fetch(url);
//     })
//     .then(response => {
//       return response.json();
//     });
// }

// fetchTodo()
//   .then(dataFromResponse => {
//     console.log("SERVER RESPOND", dataFromResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });

async function asyncFetch() {
  try {
    console.log("REQUEST STARTED");
    await delay(2000);
    const apiData = await fetch(url);
    const response = await apiData.json();
    console.log("SERVER RESPONSE", response);
  } catch (error) {
    throw new Error("ERROR OCCURRED");
  }
}
asyncFetch();
