// Завдання 1

let rating = 0;

let ask_1 = prompt('За допомогою якого тега вставляють фото у HTML ? (Відповідь писати без "<>")');
if (ask_1.toLowerCase() === 'img') {
    rating++;
}
let ask_2 = prompt('За допомогою якого тега вставляють кнопку у HTML ? (Відповідь писати без "<>")');
if (ask_2.toLowerCase() === 'button') {
    rating++;
}
let ask_3 = prompt('За допомогою якого тега вставляють посилання у HTML ? (Відповідь писати без "<>")');
if (ask_3.toLowerCase() === 'a') {
    rating++;
}
let ask_4 = prompt('За допомогою якого тега вставляють скрипт у HTML ? (Відповідь писати без "<>")');
if (ask_4.toLowerCase() === 'script') {
    rating++;
}
let ask_5 = prompt('За допомогою якого тега вставляють секцію у HTML ? (Відповідь писати без "<>")');
if (ask_5.toLowerCase() === 'section') {
    rating++;
}
let ask_6 = prompt('Чи існує такий тег як h7 ? (відповідь так або ні))');
if (ask_6.toLowerCase() === 'ні') {
    rating++;
}
let ask_7 = prompt('За допомогою якого тега вставляють горизонтальну пряму лінію у HTML ? (Відповідь писати без "<>")');
if (ask_7.toLowerCase() === 'hr') {
    rating++;
}
let ask_8 = prompt('Задопомогою якого тега розділяють рядок у HTML ? (Відповідь писати без "<>")');
if (ask_8.toLowerCase() === 'br') {
    rating++;
}
let ask_9 = prompt('Задопомогою якого тега вставляють форму у HTML ? (Відповідь писати без "<>")');
if (ask_9.toLowerCase() === 'form') {
    rating++;
}
let ask_10 = prompt('Задопомогою якого тега текст роблять жирним у HTML ? (Відповідь писати без "<>")');
if (ask_10.toLowerCase() === 'b') {
    rating++;
}

console.log('Ваша оцінка за тест - ' + rating)

if (rating >= 0 && rating < 3) {
    console.log('Поганий результат :(')
} else if (rating >= 3 && rating < 6) {
    console.log('Середній результат')
} else if (rating >= 6 && rating < 9) {
    console.log('Хороший результат')
} else if (rating >= 9 && rating < 10.1) {
    console.log('Відмінний результат')
}

// Завдання 2

let name = prompt('Введіть імя - ');

if (name === 'імя') {
    let password = prompt('Введіть пароль - ')
    if (password === 'ЛОГОС') {
        console.log('Ласкаво просимо!')
    } else if (password === null) {
        console.log('Вхід скасований')
    } else {
        console.log('Пароль невірний!')
    }
} else {
    console.log('Хто ви такий ?')
}

// Завдання 3

let month_number = prompt('Введіть число');

if (month_number == 1 || month_number == 2 || month_number == 12) {
    console.log('Зима')
} else if (month_number == 3 || month_number == 4 || month_number == 5) {
    console.log('Весна')
} else if (month_number == 6 || month_number == 7 || month_number == 8) {
    console.log('Літо')
} else if (month_number == 9 || month_number == 10 || month_number == 11) {
    console.log('Осінь')
} else {
    console.log('Анріал')
}