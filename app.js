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

// HW4

// 1. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:
const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

const initials = userNames.map(name => {
    const parts = name.split(' ');
    return parts.map(part => part[0]).join('.') + '.';
}).sort();

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

// 2. Задача на фільтрування масиву
const userNamesTwo = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
const validFirstLetters = ['Е', 'Ю', 'І', 'Я', 'А', 'О'];

// через умовну конструкцію
const filteredNames = [];
for (let i = 0; i < userNamesTwo.length; i++) {
    const name = userNamesTwo[i];
    if (validFirstLetters.indexOf(name[0]) !== -1) {
        filteredNames.push(name);
    }
}
console.log(filteredNames); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

// через вбудований метод масивів
const filteredNamesTwo = userNamesTwo.filter(name => {
    const firstLetter = name[0];
    return validFirstLetters.includes(firstLetter);
});

console.log(filteredNamesTwo); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']

// 3. Задача на розворот числа:
const currentMaxValue = 4589;
const stringValue = currentMaxValue.toString();
const reversedStringValue = stringValue.split('').reverse().join('');
const reverseMaxValue = parseInt(reversedStringValue);

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

// 4. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:
const resultsArray = [1, 2, [3, [4]]];

function multiplyArrayElements(array) {
    let product = 1;

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            product *= multiplyArrayElements(array[i]);
        } else {
            product *= array[i];
        }
    }

    return product;
}

const productOfArray = multiplyArrayElements(resultsArray);

console.log(productOfArray); // 24


// HW5
// 1. Задача про обчислення різниці часу
//
// function durationBetweenDates(startDate = '01 Jan 2000', endDate = '01 Jan 2000', unit = 'days') {
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     const difference = Math.abs(end - start);
//
//     let result;
//     switch (unit) {
//         case 'days':
//             result = difference / (1000 * 60 * 60 * 24);
//             break;
//         case 'hours':
//             result = difference / (1000 * 60 * 60);
//             break;
//         case 'minutes':
//             result = difference / (1000 * 60);
//             break;
//         case 'seconds':
//             result = difference / 1000;
//             break;
//         default:
//             return 'Invalid unit';
//     }
//
//     return `${Math.floor(result)} ${unit}`;
// }
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

// Просунута робота з функціями (1)

// 1. Напишіть функцію addThemAll
console.log('addThemAll',addThemAll(2,4)); // 6
console.log('addThemAll',addThemAll(1,2,3,4)); // 10
console.log('addThemAll',addThemAll(5,5,10)); // 20

function addThemAll(...numbers) {
    return numbers.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
}

//  2. Задача на використання замикання.
console.log('multiply',multiply(5)(5))		// 25
console.log('multiply',multiply(2)(-2))	        // -4
console.log('multiply',multiply(4)(3))		// 12

function multiply(a) {
    return function(b) {
        return a * b;
    }
}

// 3. Напишіть функцію яка буде використовуватись для сортування масиву фільмів
const movies = [
    {
        movieName: 'The Thing',
        releaseYear: 1982,
        directedBy: 'Carpenter',
        runningTimeInMinutes: 109,
    },
    {
        movieName: 'Aliens',
        releaseYear: 1986,
        directedBy: 'Cameron',
        runningTimeInMinutes: 137,
    },
    {
        movieName: 'Men in Black',
        releaseYear: 1997,
        directedBy: 'Sonnenfeld',
        runningTimeInMinutes: 98,
    },
    {
        movieName: 'Predator',
        releaseYear: 1987,
        directedBy: 'McTiernan',
        runningTimeInMinutes: 107,
    },
];

function byProperty(property, direction) {
    return function(a, b) {
        let valueA = a[property];
        let valueB = b[property];

        let comparison;
        if (typeof valueA === 'string' && typeof valueB === 'string') {
            comparison = valueA.localeCompare(valueB);
        } else {
            comparison = valueA - valueB;
        }

        return direction === '>' ? comparison : -comparison;
    };
}

console.log('виведе масив фільмів посортованих по року випуску, від старішого до новішого', [...movies].sort(byProperty('releaseYear', '>')));
console.log('виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого',[...movies].sort(byProperty('runningTimeInMinutes', '<')));
console.log('виведе масив фільмів посортованих по назві, в алфавітному порядку',[...movies].sort(byProperty('movieName', '>')));

// 4. Напишіть функцію яка відфільтрує масив унікальних значень

const userNames2 = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
    return [...new Set(array)];
}

console.log(filterUnique(userNames2)); // ['Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

// HW7 — Планування виконання, методи об'єктів, контекст виконання, методи call та apply
// 1. Напишіть функцію detonatorTimer(delay) використовуючи setInterval
function detonatorTimer(delay) {
    const intervalId = setInterval(() => {
        if (delay > 0) {
            console.log(delay);
            delay--;
        } else {
            console.log('BOOM!');
            clearInterval(intervalId);
        }
    }, 1000);
}
detonatorTimer(3);

// 2. Напишіть функцію detonatorTimer(delay) використовуючи вкладений setTimeout
function detonatorTimerTimeout(delay) {
    function countdown() {
        if (delay > 0) {
            console.log(delay);
            delay--;
            setTimeout(countdown, 1000);
        } else {
            console.log('BOOM!');
        }
    }

    countdown();
}
detonatorTimerTimeout(3);

// 3. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці властивості виводять.
let me = {
    name: 'Yana',
    residency: 'Kyiv',
    gender: 'female',
    age: 27,
    hobby: ['bouldering', 'tea ceremony'],
    favoriteColor: 'violet-blue',
    profession: 'frontend developer',
    currentTask: 'learning JavaScript',
    unpaidJob: 'tea master',
    introduce() {
        console.log(`Hello, my name is ${this.name} and I live in ${this.residency}.`);
    },
    futureGoals() {
        console.log(`In the future, I want to become an expert in ${this.profession}.`);
    },
    currentActivity() {
        console.log(`Right now, I'm focused on ${this.currentTask}.`);
    },
    describeUnpaidJob() {
        console.log(`One of my passions is working as a ${this.unpaidJob}, even though it's not paid.`);
    }
}

me.introduce();
me.currentActivity();
me.futureGoals();
me.describeUnpaidJob();

// 4. А тепер зробіть всі свої методи з попередньої задачі прив'язаними до контексту свого об'єкту

const securedIntroduce = me.introduce.bind(me);
const securedCurrentActivity = me.currentActivity.bind(me);
const securedFutureGoals = me.futureGoals.bind(me);
const securedDescribeUnpaidJob = me.describeUnpaidJob.bind(me);

setTimeout(securedIntroduce, 1000);
setTimeout(securedCurrentActivity, 2000);
setTimeout(securedFutureGoals, 3000);
setTimeout(securedDescribeUnpaidJob, 3000);

// 5. Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд.

function durationBetweenDates(startDate = '01 Jan 2000', endDate = '01 Jan 2000', unit = 'days') {
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

    console.log(`${Math.floor(result)} ${unit}`);
}

function slower(func, seconds) {
    return function(...args) {
        setTimeout(function () {
            func(...args);
        }, seconds * 1000)
    };
}

let slowedSomeFunction = slower(durationBetweenDates, 5);
slowedSomeFunction('02 Aug 1985', '03 Aug 1985', 'seconds')

// HW8 — DOM дерево
const navTitle = document.querySelector('#headerTwo');
console.log(navTitle);

const firstSection = document.getElementsByTagName('section')[0];
console.log(firstSection);

const list = Array.from(document.querySelectorAll('li')).find(el => el.textContent === 'Пункт 5');
console.log(list);

const hatredLevel = document.querySelector('.hatredLevelBlock');
console.log(hatredLevel);