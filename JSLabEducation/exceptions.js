// oriignal ↓

let num = +prompt("Введите положительное целое число?", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Должно быть целое неотрицательное число");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (e) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || "возникла ошибка");

alert( `Выполнение заняло ${diff}ms` );





// mine ↓

let num = +prompt("Введите положительное целое число?", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Должно быть целое неотрицательное число");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (e) {
  if (e.name === "ReferenceError") {
    alert(e.message)
  } else {
    result = 0
  }
} finally {
  diff = Date.now() - start;
}

alert(result || "Возникла ошибка");

alert( `Выполнение заняло ${diff}ms` );




