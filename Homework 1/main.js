// Завдання 1

let city;
city = 'Київ';
city = 'Львів';
let adress = city;
alert(adress);

// Завдання 2

let n = 18;
let result = (n*n*n);
console.log(result);

// Завдання 3

let price_pen = 5.25;
let price_pencil = 3.5;
let count_pen = prompt('Введіть кількість ручок яку хочете купити:');
let count_pencil = prompt('Введіть кількість олівців яку хочете купити:');
document.write(" Сума вашого замовлення: "  + " Загальна сума за ручки: " 
+ price_pen * count_pen + " Загальна сума за олівці: " + price_pencil * count_pencil
 + " Загальна сума замовленя: "+ ((price_pen*count_pen)+(price_pencil * count_pencil))
 + " Дякую за покупку, приходьте ще!");