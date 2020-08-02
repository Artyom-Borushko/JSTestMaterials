// const readline = require("readline")

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("How do you like node?", answer => {
//     console.log(`Your answer is : ${answer}`)
// });

const events = require("events");
const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);                   // handle all of the custom events
});

process.stdin.on("data", data => {
  const input = data.toString().trim();
  if (input === "exit") {
    emitter.emit("customEvent", "Bye", "process");      // custom event is raised and some data has passed to that event 
    process.exit();
  }
  emitter.emit("customEvent", input, "terminal");       // custom event is raised and some data has passed to that event 
});
