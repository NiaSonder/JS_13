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
