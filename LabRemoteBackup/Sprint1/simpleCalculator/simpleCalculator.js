
const sumAll = (...args) => {
    let sum = 0;
    for (let arg of args) {
      sum += arg;
    }
    return sum;
  };
  
  const multiplyAll = (...args) => {
    let multiply = 1;
    for (let arg of args) {
      multiply *= arg;
    }
    return multiply;
  };
  
  const divideAll = (...args) => {
    let primaryValue = args[0]
    for (const arg of args) {
      primaryValue /= arg
    }
    return primaryValue * 100
  };
  
  const subtractAll = (...args) => {
      let primaryValue = args[0]
      let subtract = primaryValue * 2
      for (const arg of args) {
          subtract -= arg
      }
      return subtract
  }
  
  
  console.log('Summation result: ', sumAll(1, 2, 3, 4));
  console.log('Multiplication result: ', multiplyAll(2, 3, 2));
  console.log('Division result: ', divideAll(100, 2, 2, 5, 2));
  console.log('Subtraction result: ', subtractAll(15, 2, 3, 2));