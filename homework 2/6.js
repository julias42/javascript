 /**
   * Функция склонения слова для числительного.
   * @param {number} count - Число которое задает пользователь.
   * @param {string} one - Первый вариант склонения слова для one.
   * @param {string} two - Второй вариант склонения слова для two.
   * @param {string} five - Третий вариант склонения слова для five.
   * @returns {string} Склонённое слово в зависимости от заданного числа.
   */
"use strict";

    function declinationOfNumber(count, one, two, five) {
      if (count >= 5 && count <= 50) {
        return five;
      }
      if (count === 1) {
        return one;
      }
      if (count >= 2 && count <= 4) {
        return two;
      }
      return five;
    }
    const wordNumber = 3;
    const word = declinationOfNumber(wordNumber, "сникерс", "сникерса",
      "сникерсов");
    console.log(`У меня есть ${wordNumber} ${word}.`);
