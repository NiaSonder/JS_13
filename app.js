'use strict';

const num1 = 5;
const num2 = 15;

// Додавання
let addition = num1 + num2;
console.log(`Додавання: ${num1} + ${num2} = ${addition}`);

// Віднімання
let subtraction = num2 - num1;
console.log(`Віднімання: ${num2} - ${num1} = ${subtraction}`);

// Множення
let multiplication = num1 * num2;
console.log(`Множення: ${num1} * ${num2} = ${multiplication}`);

// Ділення
let division = num1 / num2;
console.log(`Ділення: ${num1} / ${num2} = ${division}`);

// Зведення в ступінь
let exponentiation = Math.pow(num1, num2);
let exponentiation2 = num1 ** num2;
console.log(`Зведення в ступінь: ${num1}^${num2} = ${exponentiation}`);
console.log(`Зведення в ступінь спосіб номер 2: ${num1}^${num2} = ${exponentiation2}`);

// Знаходження квадратного кореню
let squareRoot = Math.sqrt(num1);
let squareRoot2 = num1 ** 0.5;
console.log(`Квадратний корінь з ${num1} = ${squareRoot}`);
console.log(`Квадратний корінь з ${num1} спосіб номер 2 = ${squareRoot2}`);

let pi = 3.14159;
let stringPi = "3.14159";

// Перетворення змінної на рядок
let toString1 = String(pi);
console.log(`String(): ${toString1} (тип: ${typeof toString1})`);

let toString2 = pi.toString();
console.log(`toString(): ${toString2} (тип: ${typeof toString2})`);

let toString3 = pi + "";
console.log(`Конкатенація з порожнім рядком: ${toString3} (тип: ${typeof toString3})`);

let toString4 = `${pi}`;
console.log(`Шаблонні рядки: ${toString4} (тип: ${typeof toString4})`);

// Перетворення змінної на число
let toNumber1 = Number(stringPi);
console.log(`Number(): ${toNumber1} (тип: ${typeof toNumber1})`);

let toNumber2 = parseInt(stringPi);
console.log(`parseInt(): ${toNumber2} (тип: ${typeof toNumber2})`);

let toNumber3 = parseFloat(stringPi);
console.log(`parseFloat(): ${toNumber3} (тип: ${typeof toNumber3})`);

let toNumber4 = stringPi - 0;
console.log(`Віднімання 0: ${toNumber4} (тип: ${typeof toNumber4})`);

let toNumber5 = +stringPi;
console.log(`Унарний плюс: ${toNumber5} (тип: ${typeof toNumber5})`);

// Перетворення змінної на булеве значення
let toBoolean1 = Boolean(pi);
console.log(`Boolean(): ${toBoolean1} (тип: ${typeof toBoolean1})`);

let toBoolean2 = !!stringPi;
console.log(`Подвійний знак заперечення: ${toBoolean2} (тип: ${typeof toBoolean2})`);


// Task 1:
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('ЛолКек');
    } else if (i % 5 === 0) {
        console.log('Кек');
    } else if (i % 3 === 0) {
        console.log('Лол');
    } else {
        console.log(i);
    }
}

// Task 2: (variant of for)
function getEvenNumbersFor (value) {
    if (typeof value !== 'number') {
        console.log('Таке чуство шо Бог десь наказує нас за шось');
        return;
    }

    for (let i = 0; i <= value; i += 2) {
        console.log(i)
    }
}
getEvenNumbersFor('123');

function getEvenNumbersForTwo (value) {
    if (typeof value !== 'number') {
        console.log('Таке чуство шо Бог десь наказує нас за шось');
        return;
    }

    for (let i = 0; i <= value; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}
getEvenNumbersForTwo(20);

// Task 2: (variant of while)
function getEvenNumbersWhile (value) {
    if (typeof value !== 'number') {
        console.log('Таке чуство шо Бог десь наказує нас за шось');
        return;
    }

    let i = 0;
    while (i < value) {
        console.log(i)
        i += 2;
    }
}
getEvenNumbersWhile(40);

function getEvenNumbersWhileTwo (value) {
    if (typeof value !== 'number') {
        console.log('Таке чуство шо Бог десь наказує нас за шось');
        return;
    }

    let i = 0;
    while (i < value) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
}
getEvenNumbersWhileTwo('sdadsa');

// HM3

// 1. Задача про рекурсію
function recursiveOddSumTo(number) {
    if (number <= 0) {
        return 0;
    }

    if (number % 2 !== 0) {
        return number + recursiveOddSumTo(number - 2);
    } else {
        return recursiveOddSumTo(number - 1);
    }
}

console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25

//  2. Задача про ітерацію
function iterativeOddSumTo(number) {
    let sum = 0;

    for (let i = 0; i <= number; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }

    return sum;
}

console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(10)) // 25

// HW5
// 1. Задача про обчислення різниці часу

function durationBetweenDates(startDate, endDate, unit) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const difference = Math.abs(end - start);

    let result;
    switch (unit) {
        case 'days':
            result = difference / (1000 * 60 * 60 * 24);
            break;
        case 'hours':
            result = difference / (1000 * 60 * 60);
            break;
        case 'minutes':
            result = difference / (1000 * 60);
            break;
        case 'seconds':
            result = difference / 1000;
            break;
        default:
            return 'Invalid unit';
    }

    return `${Math.floor(result)} ${unit}`;
}
console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')) // поверне '86400 seconds'
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')) // поверне '362 days'

// 2. Задача про перетворення об'єкту

// приклад об'єкту
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};

function optimizer(data) {
    const optimizedData = {};

    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            optimizedData[key.toLowerCase()] = parseFloat(data[key]).toFixed(2);
        }
    }

    return optimizedData;
}

const updatedPriceData = optimizer(priceData);

console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
