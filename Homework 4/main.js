// Завдання 1.1
let pass = prompt('Введіть пароль (Пароль: ЛОГОС)')
let i = 5;

do {
    if (pass == 'ЛОГОС') {
        document.write('<h1>Запрошуємо на сайт!</h1>')
        i = 0;
    } else if (pass != 'ЛОГОС') {
        if (i === 1) {
            document.write('<h1>Будь ласка спробуйте пізніше!</h1>')
            i = 0;
        } else {
            pass = prompt(`Залишилось ${i-=1} спроби!`)
        }
    }
}
while (i > 0);




// Завдання 2.1

// let n = +prompt(`Введіть сило, щоб піднести до факторіала`)
// let i = 1;
// let result = 1;
// while (i <= n) {
//     result *= i;
//     i++;
// }
// document.write(`<h3> ${result}</h3>`);

// Завдання 2.2

// let i = 1000;
// while(i<= 9999){
//     document.write(`<h3> ${i}</h3>`);
//     i +=3;
// }

// Завдання 2.3

// let i = 1;
// let n = 1;
// while (i <= 55) {
//     document.write(`<h3> ${n}</h3>`);
//     n += 2;
//     i++;
// }

// Завдання 2.4

// let i = 90;
// while (i >= 0) {
//     document.write(`<h3> ${i}</h3>`);
//     i -= 5;
// }

// Завдання 2.5

// let i = 1;
// let n = 1;
// while (i <= 20) {
//     document.write(`<h3> ${n}</h3>`);
//     n *= 2;
//     i++;
// }

// Завдання 2.6

// let a =2;
// while(a < 10000){
//     a = a * 2 - 1;
//     document.write(`<h3> ${a}</h3>`);
// }

// Завдання 2.7

// let a = -166;
// while (a <= 99) {

//     if (a >= -99) {
//         document.write(`<h3> ${a}</h3>`);
//     }
//     a = 2 * a + 200;
// }

// Завдання 2.8

// let a = +prompt(' Число');
// let b = +prompt('Степінь');
// let result = 1;
// let i = 1;
// while (i <= b || i <= -b) {
//     result = result * a;
//     i++;
// }
// if (b < 0) {
//     result = 1 / result;
// } else if (b=0) {
//     result = 1;
// }
// document.write(`<h1> ${result}</h1>`);