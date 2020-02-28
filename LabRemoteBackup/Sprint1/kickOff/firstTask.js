
let arrayOfRandomIntegers = [];
const createRandom = (min, max) => {
  let counter = 0;
  while (counter < 10) {
    let randomValue = +(Math.random() * (max - min) + min).toFixed(0);
    counter++;
    arrayOfRandomIntegers.push(randomValue);
  }
};

 createRandom(1, 10);

arrayOfRandomIntegers.sort(function(a, b) {
  return b - a;
});

let multiplyThreeGreatestValues =
  arrayOfRandomIntegers[0] *
  arrayOfRandomIntegers[1] *
  arrayOfRandomIntegers[2];

console.log(multiplyThreeGreatestValues);