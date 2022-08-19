"use strict";
  /**
   * Функция расчитывает заданные числа с заданным оператором.
   * @param {number} arg1 Первое число
   * @param {number}} arg2 Второе число
   * @param {string} operation заданные операторы умножения, деления, суммы, 
   * разности
   * @returns Вернёт результат вычисления заданных чисел с помощью вложенных 
   * функций 
   */
    function mathOperation(arg1, arg2, operation) {
      switch (operation) {
        case "+": return additionOfNumbers(arg1, arg2);
        case "-": return differenceOfNumbers(arg1, arg2);
        case "*": return multiplicationOfNumbers(arg1, arg2);
        case "/": return divisionOfNumbers(arg1, arg2);
        default: return NaN

      }
      function additionOfNumbers(a, b) {
        let rezult = a + b;
        return rezult;
      }

      function differenceOfNumbers(a, b) {
        let rezult = 0;
        if (a > b) { rezult = a - b; } else {
          rezult = b - a;
        }
        return rezult;
      }

      function multiplicationOfNumbers(a, b) {
        let rezult = a * b;
        return rezult;
      }

      function divisionOfNumbers(a, b) {
        let rezult = a / b;
        return rezult;
      }
    }
    console.log(mathOperation(5, 8, "/"));