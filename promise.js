let promise = new Promise (function(resolve, reject) {
   setTimeout(() => resolve("done"), 1000);
//    setTimeout(() => reject(new Error('Whoops')), 1000)
})

promise.then (
    function(result) {console.log(result);},
    function(error) {console.log(error);},
//    error => console.log(error)
)