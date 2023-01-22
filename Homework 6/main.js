// Завдання 1

// let a = +prompt('Введіть число:');

// Function declaration

// function fib(num) {
//     let b = 1;
//     let c = 1;
//     let str = "1 1 ";
//     for (let i = 3; i <= num; i++) {
//         let k = b + c;
//         b = c;
//         c = k;
//         str += c + " ";
//     }
//     return 'Result = ' + str;
// }

// Arrow function

// let fib = (num) => {
//     let b = 1;
//     let c = 1;
//     let str = "1 1 ";
//     for (let i = 3; i <= num; i++) {
//         let k = b + c;
//         b = c;
//         c = k;
//         str += c + " ";
//     }
//     return 'Result = ' + str;
// }

// let result = fib(a);
// console.log(result);

// Завдання 2

// let c = +prompt('Введіть кількість чисел');
// let d = +prompt('Введіть знаменник');

// Function declaration (через цикл)

// function geometric_sequence(count, denominator) {
//     let start = 1;
//     let result = 1;
//     for (let i = 1; i < count; i++) {
//         start *= denominator;
//         result += start;
//     }
//     return result;
// }

// let k = geometric_sequence(c, d);
// console.log(`RESULT = ${k}`);

// Function declaration (через формулу)

// function geometric_sequence(n, q) {
//     let result;
//     let b = 1;
//     result = (b * (1 - (q ** n))) / (1 - q);
//     return result;
// }

// let k = geometric_sequence(c, d);
// console.log(`RESULT = ${k}`);

// Function expression (через цикл)

// let geometric_sequence = function (count, denominator) {
//     let start = 1;
//     let result = 1;
//     for (let i = 1; i < count; i++) {
//         start *= denominator;
//         result += start;
//     }
//     return result;
// }

// let k = geometric_sequence(c,d);
// console.log(`RESULT = ${k}`);

// Function expression (через формулу) 

// let geometric_sequence = function (n, q) {
//     let result;
//     let b = 1;
//     result = (b * (1 - (q ** n))) / (1 - q);
//     return result;
// }

// let k = geometric_sequence(c, d);
// console.log(`RESULT = ${k}`);

// Завдання 3

let a = +prompt('Введіть перше число діапазону');
let b = +prompt('Введіть друге число діапазону');

let PrimeAr = function (first, second) {
    let str = "";
    for (let i = first; i <= second; i++) {
        for (let j = 2; j <= i; j++) {
            if (i % j === 0 && j < i) {
                break;
            } else if (j === i) {
                str += i + ", ";
            }
        }
    }
    return str;
}
console.log(PrimeAr(a, b));