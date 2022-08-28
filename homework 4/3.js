"use strict";
/**
* Функция деления числа на разряды с условием от 0 до 999 включительно
* @param {number} число которое передаём в функцию 
* @return {object} вернёт пустой обьект в случае не соблюдения условия, 
* либо обьект с результатом. 
*/
const number = +prompt('Введите число:');
function getDigitsOfNumber(number) {
  if (!Number.isInteger(number) || number < 0 || number > 999) {
    console.error(`Введено не корректное число!`);
    return {};
  }
  return {
    units: number % 10,
    dozens: Math.floor(number / 10) % 10,
    hundreds: Math.floor(number / 100),
  }
}
console.log(getDigitsOfNumber(number));