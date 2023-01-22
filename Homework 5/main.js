// Завдання 1

// let number = prompt('Введіть число')
// switch (number) {
//     case '12':
//     case '1':
//     case '2':
//         alert('Winter');
//         break;
//     case '3':
//     case '4':
//     case '5':
//         alert('Spring');
//         break;
//     case '6':
//     case '7':
//     case '8':
//         alert('Summer');
//         break;
//     case '9':
//     case '10':
//     case '11':
//         alert('Autumn');
//         break;

//     default:
//         alert('Ви ввели некоректне значення')
//         break;
// }

// Завдання 2

let a = +prompt('Введіть число')
function PrimeN(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return console.log(`Не просте число`)
        } 
    }
    return console.log(`просте число`)
}
PrimeN(a);

// Завдання 3

// function maxElement(...array) {
//     let maxValue = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > maxValue) {
//             maxValue = array[i];
//         }
//     }
//     return console.log(`Максимальне значення ${maxValue}`)
// }
// maxElement(3, 4, 7, 9, 8, 10, 11, 2, 9999);