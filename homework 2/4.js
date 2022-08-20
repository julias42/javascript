"use strict";
/**
 * Функция сложения чисел
 * @param {*} a Первое число 
 * @param {*} b Второе число
 * @returns вернёт результат сложения заданных чисел
 */
function additionOfNumbers(a, b) {
  return a + b;
}
/**
 * Функция разности чисел с проверкой на большее число
 * @param {*} a Первое число 
 * @param {*} b Второе число
 * @returns вернёт результат вычитания заданных чисел
 */
function differenceOfNumbers(a, b) {
  let rezult = 0;
  if (a > b) {
    rezult = a - b;
  }
  return b - a;
}
/**
 * Функция произведения чисел
 * @param {*} a Первое число 
 * @param {*} b Второе число
 * @returns вернёт результат умножения заданных чисел
 */
function multiplicationOfNumbers(a, b) {
  let rezult = a * b;
  return rezult;
}
/**
 * Функция суммы чисел
 * @param {*} a Первое число 
 * @param {*} b Второе число
 * @returns вернёт результат деления заданных чисел
 */
function divisionOfNumbers(a, b) {
  let rezult = a / b;
  return rezult;
}
console.log(differenceOfNumbers(8, 10));