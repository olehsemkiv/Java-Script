// Завдання 1

// let n = +prompt('ENter number');
// let result = 1;
// for (i = 1; i <= n; i++) {
//     result *= i;
// }
// document.write(`<h3> ${result}</h3>`);

// Завдання 2

// for (let i = 1000; i <= 9999; i += 3) {
//     document.write(`<h3> ${i}</h3>`);
// }

// Завдання 3

// for (let i = 1; i <= 111; i+=2) {
//     document.write(`<h3> ${i}</h3>`);
// }

// Завдання 4

// for (let i = 90; i >= 0; i -= 5) {

//     document.write(`<h3> ${i}</h3>`);
// }

// Завдання 5

// let n = 1;
// for (let i = 1; i <= 20; i++) {
//     n = n* 2;
//     document.write(`<h3> ${n}</h3>`);
// }

// Завдання 6

// for (a = 2; a < 10000; a = a * 2 - 1) {
//     document.write(`<h3> ${a}</h3>`);
// }

// Завдання 7

// for (let a = -166; a <= 99; a = 2 * a + 200) {
//     if (a > -99)
//         document.write(`<h2> ${a}</h2>`);
// }

// Завдання 8


let a = +prompt(' Число');
let b = +prompt('Степінь');
let result = 1;

for (let i = 1; i <= b || i <= -b; i++) {
    result = result * a
}
if (b < 0) {
    result = 1 / result;
} else {
    result = 1;
}
document.write(`<h1> ${result}</h1>`);