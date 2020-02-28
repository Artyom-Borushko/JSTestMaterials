
let object = {
  wealth: 2,
  happiness: 5,
  smile: 3,
  fun: 4,
  dancing: 1
};
let objectKeys = Object.keys(object);
let sortedKeys = objectKeys.sort(function(a, b) {
  return object[b] - object[a];
});

console.log(sortedKeys);