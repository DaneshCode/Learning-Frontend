/// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Background color control
  document
    .getElementById('bgColorBtn')
    .addEventListener('click', change_background_color);

  // Text color control
  document
    .getElementById('textColorBtn')
    .addEventListener('click', change_color);

  // Text size controls
  document.getElementById('zoomOutBtn').addEventListener('click', zoom_out);
  document.getElementById('zoomInBtn').addEventListener('click', zoom_in);

  // Light bulb controls
  document.getElementById('turnOnBtn').addEventListener('click', turn_on);
  document.getElementById('turnOffBtn').addEventListener('click', turn_off);
});

// Q: How can we create a random background color for an element?
function change_background_color() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById('test-1').style.backgroundColor = randomColor;
}

// Q: How can we change the text color dynamically?
function change_color() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById('test-1').style.color = randomColor;
}

// Q: How can we implement text size reduction?
function zoom_out() {
  const element = document.getElementById('test-1');
  const currentSize = parseFloat(window.getComputedStyle(element).fontSize);
  if (currentSize > 0.5) {
    element.style.fontSize = currentSize - 4 + 'px';
  }
}

// Q: How can we implement text size increase?
function zoom_in() {
  const element = document.getElementById('test-1');
  const currentSize = parseFloat(window.getComputedStyle(element).fontSize);
  if (currentSize > 0.5) {
    element.style.fontSize = currentSize + 4 + 'px';
  }
}

// Q: How can we change an image source to create a light-on effect?
function turn_on() {
  document.getElementById('turn_off').src = './images/pic_bulbon.gif';
}

// Q: How can we change an image source to create a light-off effect?
function turn_off() {
  document.getElementById('turn_off').src = './images/pic_bulboff.gif';
}

// Q: How does a break statement work in a loop?
for (let i = 0; i <= 10; i++) {
  document.getElementById('output').innerHTML += 'test<br>';
  if (i == 5) {
    break;
  }
}

// Q: How does continue statement skip iterations in a loop?
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  document.getElementById('output2').innerHTML += i + '<br>';
}

// Q: How do nested loops work in JavaScript?
for (let a = 1; a <= 2; a++) {
  document.getElementById('output3').innerHTML += a + 'a<br>';
  for (let b = 1; b <= 3; b++) {
    document.getElementById('output3').innerHTML += b + 'b<br>';
  }
}

// Q: How can we modify array elements by index?
let num = [1, 6, 7, 5, 54, 4, 4];
num[2] = 40;
document.getElementById('output5').innerHTML +=
  num[2] + '<br>' + num[3] + '<br>';

// Q: How can we calculate the average of array numbers using reduce?
let grades = [17, 18.5, 20, 20, 19.75, 20, 18, 20];
let sum = grades.reduce((a, b) => a + b, 0); // محاسبه مجموع
let average = sum / grades.length; // محاسبه میانگین

// نمایش همه اعداد در قالب یک آرایه
document.getElementById('output6').innerHTML = `[${grades.join(
  ', ',
)}] <br><br><br><br><br>`;

document.getElementById(
  'output6',
).innerHTML += `<strong><br><br><br>میانگین : ${average}</strong><br><br><br>`;

// Q: How can we calculate the average of array numbers using a for loop?
let grades_2 = [17, 18.5, 20, 20, 19.75, 20, 18, 20];
let sum_2 = 0;

for (let i = 0; i < grades_2.length; i++) {
  sum_2 += grades_2[i];
}

let average_2 = sum_2 / grades_2.length;

document.getElementById('output7').innerHTML = `[${grades_2.join(
  ', ',
)}] <br><br><br><br><br>`;

document.getElementById(
  'output7',
).innerHTML += `<strong><br><br><br>میانگین : ${average_2}</strong><br><br><br>`;

// Q: What's the difference between slice and splice methods?
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.getElementById('output4').innerHTML += `Slice: ${array.slice(
  0,
  5,
)}<br>`;
document.getElementById('output4').innerHTML += `Splice: ${array.splice(
  2,
)}<br>`;

// Q: How can we find the maximum value in an array?
let array_2 = [9.75, 20, 33, 43, 25, 66, 17, 18, 19, 10];
let max = array_2[0];
for (let i = 0; i < array_2.length; i++) {
  if (array_2[i] > max) {
    max = array_2[i];
  }
}
document.getElementById('output8').innerHTML += `Max: ${max}<br>`;

// Q: How can we find the minimum value in an array?
let array_3 = [9.75, 20, 33, 43, 25, 66, 17, 18, 19, 10];
let min = array_3[0];
for (let i = 0; i < array_3.length; i++) {
  if (array_3[i] < min) {
    min = array_3[i];
  }
}
document.getElementById('output8').innerHTML += `Min: ${min}<br>`;

// Q: How do we create a basic function to add two numbers?
function sumationBasic(a, b) {
  const result = a + b;
  document.getElementById(
    'output9',
  ).innerHTML = `Sum of ${a} + ${b} = ${result}<br>`;
  return result;
}
sumationBasic(5, 48);

// Q: How can we use rest parameters to sum multiple numbers?
function sumationMultiple(...numbers) {
  const result = numbers.reduce((a, b) => a + b, 0);
  document.getElementById('output10').innerHTML = `Sum of [${numbers.join(
    ' + ',
  )}] = ${result}<br>`;
  return result;
}
sumationMultiple(5, 6, 7, 8, 9, 10);

// Q: How can we calculate power using the exponentiation operator?
function powerOperator(base, exponent) {
  const result = base ** exponent;
  document.getElementById(
    'output11',
  ).innerHTML = `Power of ${base}^${exponent} = ${result}<br>`;
  return result;
}
powerOperator(2, 3);

// Q: How can we calculate power using a for loop?
function powerLoop(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  document.getElementById(
    'output12',
  ).innerHTML = `Power of ${base}^${exponent} = ${result}<br>`;
  return result;
}
powerLoop(2, 10);

//Q16 create a sidebar

const sideBtn = document.querySelector('.side_btn');
const side = document.querySelector('.side');

sideBtn.addEventListener('click', () => {
  side.classList.toggle('active');
  // Change button text and icon based on sidebar state
  sideBtn.innerHTML = side.classList.contains('active')
    ? '&times close' // × symbol for close
    : '&#9776 open'; // ☰ symbol for hamburger menu
});

// ==================================================================

function add7(num) {
  return num + 7;
}
console.log(add7(10));

// ==========================================================

function multiple(num1, num2) {
  return num1 * num2;
}
console.log(multiple(5, 10));

// =====================================================

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize('hello')); // خروجی: Hello
console.log(capitalize('WORLD')); // خروجی: World

// ================================================================

function lastletter(str) {
  return str.charAt(str.length - 1);
}
console.log(lastletter('hello world'));

// ==============================================================

// let answer = parseInt(
//   prompt('Please enter the number you would like to FizzBuzz up to: '),
// );

// for (let i = 1; i <= answer; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// ========================================================

function sumOfTripledEvents(arr) {
  return arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, num) => acc + num, 0);
}
console.log(
  sumOfTripledEvents([1, 2, 3, 4, 5, 6, 7, 8, 9]), // Output: 60
);

// =====================================================

function camelize(str) {
  return str
    .split('-') // جدا کردن با '-'
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
    ) // حروف اول بقیه کلمات را بزرگ کن
    .join(''); // به هم وصل کن
}

console.log(camelize('my-short-string')); // "myShortString"
console.log(camelize('hello-world-test')); // "helloWorldTest"
console.log(camelize('javascript-is-fun')); // "javascriptIsFun"

// ===========================================================

function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // [3, 1] (اعداد بین 1 و 4)
console.log(arr); // [5, 3, 8, 1] (بدون تغییر)

// ===========================================================

function filterRangeInPlace(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}
console.log(filterRangeInPlace([5, 3, 8, 1], 1, 4)); // [3, 1] (اعداد بین 1 و 4)

// =========================================================

function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortDescending([5, 2, 1, -10, 8]));
//  [8, 5, 2, 1, -10]

// ======================================================

function copySorted(arrr) {
  return arrr.slice().sort();
}
let arrr = ['HTML', 'JavaScript', 'CSS'];
let sorted = copySorted(arrr);
console.log(sorted); // CSS, HTML, JavaScript
console.log(arrr); // HTML, JavaScript, CSS (no changes)

// ======================================================

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

let users = [john, pete, mary];

let names = users.map((item) => item.name);

console.log(names); // John, Pete, Mary
// ============================================================

let john1 = { name: 'John', surname: 'Smith', id: 1 };
let pete1 = { name: 'Pete', surname: 'Hunt', id: 2 };
let mary1 = { name: 'Mary', surname: 'Key', id: 3 };

let users1 = [john1, pete1, mary1];

let usersMapped = users1.map((item) => ({
  fullName: `${item.name} ${item.surname}`,
  id: item.id,
}));

console.log(usersMapped[0].id); // 1 ✅
console.log(usersMapped[0].fullName); // "John Smith" ✅

// ===========================================================

function sortByAge(arr2) {
  return arr2.sort((a, b) => a.age - b.age);
}

let john2 = { name: 'John', age: 25 };
let pete2 = { name: 'Pete', age: 30 };
let mary2 = { name: 'Mary', age: 28 };

let arr2 = [pete2, john2, mary2];

sortByAge(arr2);

console.log(arr2[0].name); // John
console.log(arr2[1].name); // Mary
console.log(arr2[2].name); // Pete

// ===========================================================

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr3 = [1, 2, 3];

console.log(shuffle(arr3));
// arr = [3, 2, 1]
console.log(shuffle(arr3));
// arr = [3, 1, 2]
console.log(shuffle(arr3));
// arr = [3, 2, 1]

// ========================================================
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john4 = { name: 'John', age: 25 };
let pete4 = { name: 'Pete', age: 30 };
let mary4 = { name: 'Mary', age: 29 };

let arr4 = [john4, pete4, mary4];

console.log(getAverageAge(arr4)); // (25 + 30 + 29) / 3 = 28

// ===================================================

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

console.log(unique(strings)); // Hare, Krishna, :-O
