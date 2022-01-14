// Ejemplo1.
function sum(num1, num2) {
  return num1 + num2;
}
function calc(num1, num2, callback) {
  return callback(num1, num2);
}
console.log(calc(1, 4, sum)); // 👉return 5

// Ejemplo2.
function date(callback) {
  console.log(new Date)
  setTimeout(() => {
    let date = new Date
    callback(date)
  }, 3000)
}

function printDate(dateNow) {
  console.log(dateNow)
}

date(printDate) // 👉returns 2022-01-14T20:09:22.498Z