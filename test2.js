console.log("Loading");
return new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log("Preparing");
    const dataToReceive = {
      port: 2000,
      server: "com",
      status: "working"
    };
    resolve(dataToReceive);
  }, 2000);
})
  .then(data => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        data.modified = true;
        resolve(data);
        console.log("Data modified", data);
      }, 4000);
    });
  })
  .then(clientData => {
    clientData.fromPromise = true;
    console.log("Data from promise", clientData);
    return clientData;
  })
  .then(content => {
    console.log(content, "Received");
  });
