// Task 1
console.log("Задание 1");
const stringTask1 = "js";
console.log(`Дана строка ${stringTask1}`);
const upperCaseTask1 = stringTask1.toUpperCase();
console.log(
  `Переведенная в заглавные буквы строка ${stringTask1} = ${upperCaseTask1}`,
);

// Task 2
console.log("Задание 2");
const wordsTask2 = ["Яблоко", "яд", "Банан", "баран", "БРЕВНО", "ЯБЛОКО"];
console.log(`Данный массив -${wordsTask2}`);

function filterByPrefix(arr, prefix) {
  const lowerPrefix = prefix.toLowerCase();

  return arr.filter((item) => {
    return item.toLowerCase().startsWith(lowerPrefix);
  });
}
const result = filterByPrefix(wordsTask2, "б");
console.log(`Результит фильтрации по префексу - ${result}`);

// Task 3
console.log("Задание 3");

const numberTask3 = 32.58884;
console.log(`Дано число: ${numberTask3}`);

const minRound = Math.floor(numberTask3);
console.log(`Данное число округлено до меньшего целого: ${minRound}`);

const maxRound = Math.ceil(numberTask3);
console.log(`Данное число округлено до большего целого: ${maxRound}`);

const nearNumberRound = Math.round(numberTask3);
console.log(`Данное число округлено до ближайшего целого: ${nearNumberRound}`);

// Task 4
console.log("Задание 4");
const numbersTask4 = [52, 53, 49, 77, 21, 32];
console.log(`Дан массив: ${numbersTask4}`);

const minNumberTask4 = Math.min(...numbersTask4);
console.log(`Минимальное значение в массиве: ${minNumberTask4}`);

const maxNumberTask4 = Math.max(...numbersTask4);
console.log(`Максимальное значение в массиве: ${maxNumberTask4}`);

// Task 5
console.log("Задание 5");
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`Случайное число от 1 до 10: ${randomNumber}`);

// Task 6
console.log("Задание 6");
const randomTask6 = Math.floor(Math.random() * 15);
console.log(`Рандомное число: ${randomTask6}`);

const randomArray = (randomTask6) => {
  const length = Math.floor(randomTask6 / 2);
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * (randomTask6 + 1)));
  }
  return result;
};
console.log(
  `Массив случайных чисел от 0 до: ${randomTask6} - ${randomArray(randomTask6)}`,
);

// Task 7
console.log("Задание 7");
const numberOneTask7 = 25;
console.log(`Первое число: ${numberOneTask7}`);
const numberTwoTask7 = 15;
console.log(`Второе число: ${numberTwoTask7}`);

const randomNumberTask7 = (numberOneTask7, numberTwoTask7) => {
  return Math.floor(
    Math.random() * (numberOneTask7 - numberTwoTask7 + 1) + numberTwoTask7,
  );
};
console.log(
  `Число в диапазне чисел ${numberOneTask7} и ${numberTwoTask7}: ${randomNumberTask7(numberOneTask7, numberTwoTask7)}`,
);

// Task 8
console.log("Задание 8");

const nowDateTask8 = new Date().toLocaleDateString("ru-RU");
console.log(`Сегодня ${nowDateTask8} число.`);

// Task 9
console.log("Задание 9");

const currentDate = new Date();

const futureDate = new Date(currentDate);
futureDate.setDate(futureDate.getDate() + 73);

console.log(futureDate);

// Task 10
console.log("Задание 10");

function formatRussianDate(date) {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const weekdays = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekday = weekdays[date.getDay()];

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `Дата: ${day} ${month} ${year} — это ${weekday}. Время: ${hours}:${minutes}:${seconds}`;
}

const now = new Date();
console.log(formatRussianDate(now));

// ======================= GAMES ===============================
// Угадай число
function gameGuessNumber() {
  // 1. Генерируем случайное число от 1 до 100
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;
  let guess;

  alert("Я загадал число от 1 до 100. Попробуй угадать!");

  // 2. Запускаем цикл игры
  do {
    guess = prompt("Введи свое число (или нажми Отмена для выхода):");

    // Если пользователь нажал "Отмена"
    if (guess === null) {
      alert(
        "❌Игра окончена. Вы сдались! Загаданное число было: " + secretNumber,
      );
      break;
    }
    guess = Number(guess);

    // Проверяем корректность ввода
    if (isNaN(guess) || guess < 1 || guess > 100) {
      alert("Пожалуйста, введи корректное число от 1 до 100.");
      continue;
    }

    attempts++;

    if (guess < secretNumber) {
      alert("Мало! Загаданное число больше.");
    } else if (guess > secretNumber) {
      alert("Много! Загаданное число меньше.");
    } else {
      alert(
        `✅Поздравляю! Вы угадали число ${secretNumber} за ${attempts} попыток!`,
      );
    }
  } while (guess !== secretNumber);
}
// Простая арифметика
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGameSimpleAriphmetix() {
    const ops = ['+', '-', '*', '/',]
    const op = ops[randomInt(0, 3)]

    let a, b, answer

    switch (op) {
        case '+': 
            a = randomInt(1,20); 
            b = randomInt(1,20); 
            answer = a+b; 
                break;
        case '-': 
            a = randomInt(1,20); 
            b = randomInt(1,a); 
            answer = a-b; 
                break;
        case '*': 
            a = randomInt(1,12); 
            b = randomInt(1,12); 
            answer = a*b;
                break;
        case '/': 
            b = randomInt(1,10); 
            let q = randomInt(1,10); 
            a = b*q; 
            answer = q; 
                break;
    }

    const user = parseInt(prompt(`Сколько будет ${a} ${op} ${b} ?`), 10)
    if (user === answer) {
        alert('✅ Правильно!')
    } else {
        alert(`❌ Неверно. Правильный ответ: ${answer}`)
    }
    if (confirm('Ещё пример?')) startGameSimpleAriphmetix();
}
// Перевени текст
function startGameTernOver() {
    let inputWord;
    do {
        inputWord = String(prompt('Введите слово и запомните его!') ?? '');
        if (inputWord.trim() === '') {
            alert('❌ Вы ничего не ввели');
        }
    } while (inputWord.trim() === '');

    let inputTernOverWord;
    do {
        inputTernOverWord = String(prompt('Напишите слово наоборот.') ?? '');
        if (inputTernOverWord.trim() === '') {
            alert('❌ Вы ничего не ввели');
        }
    } while (inputTernOverWord.trim() === '');
// Проверка
    if (inputWord.trim() === inputTernOverWord.split('').reverse().join('')) {
        alert(`✅ Отлично — "${inputTernOverWord}" соответствует "${inputWord}" написанному наоборот.`);
    } else {
        alert('❌ Не верно...');
    }
}
//  Game quiz (Викторина)
function startQuiz() {
  const quiz = [
    {
      question: "Какого цвета небо?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2,
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2,
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2,
    },
  ];

  const results = [];

  const askQuestion = (item) => {
    let userAnswer = null;
    let valid = false;

    while (!valid) {
      const input = prompt(
        `${item.question}\n${item.options.join("\n")}\n\nВведите номер ответа (1, 2 или 3):`,
      );

      if (input === null) {
        throw new Error("cancel");
      }

      if (input.trim() === "") {
        alert("Вы не ввели ответ. Пожалуйста, введите число 1, 2 или 3.");
        continue;
      }

      const number = Number(input);

      // Некорректный ввод (не число, дробное, вне диапазона)
      if (!Number.isInteger(number) || number < 1 || number > 3) {
        alert("Некорректный ввод. Введите число 1, 2 или 3.");
        continue;
      }

      userAnswer = number;
      valid = true;
    }

    const isCorrect = userAnswer === item.correctAnswer;
    alert(
      isCorrect
        ? "✅ Правильно!"
        : `❌ Неправильно. Правильный ответ: ${item.correctAnswer}`,
    );
    return isCorrect ? 1 : 0;
  };

  try {
    // Проходим по всем вопросам с помощью map
    quiz.map((item) => {
      const result = askQuestion(item);
      results.push(result);
    });

    // Если все вопросы отвечены – показываем итоговый результат
    const correctCount = results.reduce((sum, val) => sum + val, 0);
    alert(
      `Викторина окончена! Ваш результат: ${correctCount} из ${quiz.length} правильных ответов.`,
    );
  } catch (error) {
    // Отмена – показываем результат за уже отвеченные вопросы
    const answeredCount = results.length;
    const correctCount = results.reduce((sum, val) => sum + val, 0);
    alert(
      `Вы прервали игру. Ваш результат: ${correctCount} из ${answeredCount} отвеченных вопросов.`,
    );
  }
}
