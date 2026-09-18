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

  if (confirm("Ещё пример?")) {
    gameGuessNumber();
  } else {
    alert("Спасибо за игру! 👋");
  }
}
// Простая арифметика
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function startGameSimpleAriphmetix() {
  const ops = ["+", "-", "*", "/"];
  const op = ops[randomInt(0, 3)];

  let a, b, answer;

  switch (op) {
    case "+":
      a = randomInt(1, 20);
      b = randomInt(1, 20);
      answer = a + b;
      break;
    case "-":
      a = randomInt(1, 20);
      b = randomInt(1, a);
      answer = a - b;
      break;
    case "*":
      a = randomInt(1, 12);
      b = randomInt(1, 12);
      answer = a * b;
      break;
    case "/":
      b = randomInt(1, 10);
      let q = randomInt(1, 10);
      a = b * q;
      answer = q;
      break;
  }

  const userInput = prompt(`Сколько будет ${a} ${op} ${b} ?`);

  if (userInput === null) {
    alert("Игра завершена. До встречи! 👋");
    return;
  }

  const trimmed = userInput.trim();
  if (trimmed === "" || isNaN(Number(trimmed))) {
    alert("⚠️ Некорректный ответ. Введите число.");
    return startGameSimpleAriphmetix();
  }

  const user = Number(trimmed);

  if (user === answer) {
    alert("✅ Правильно!");
  } else {
    alert(`❌ Неверно. Правильный ответ: ${answer}`);
  }

  if (confirm("Ещё пример?")) {
    startGameSimpleAriphmetix();
  } else {
    alert("Спасибо за игру! 👋");
  }
}
// Перевени текст
function startGameTernOver() {
  while (true) {
    const input = prompt("Введите слово!");

    if (input === null) {
      alert("Спасибо за игру! 👋");
      return;
    }

    const inputWord = input.trim();

    if (inputWord === "") {
      alert("❌ Вы ничего не ввели");
      continue;
    }

    const reversed = inputWord.split("").reverse().join("");

    alert(`🔄 "${inputWord}" наоборот: "${reversed}"`);

    if (!confirm("Ещё пример?")) {
      alert("Спасибо за игру! 👋");
      return;
    }
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
  if (confirm("Ещё пример?")) {
    startQuiz();
  } else {
    alert("Спасибо за игру! 👋");
  }
}
// Камень, ножницы, бумага
const startGameRockStone = () => {
  const userChoice = prompt(
    `Выберите цифру с вариантом, который Вы выбрали:\n ✊1. Камень, ✌️2. Ножницы, ✋3. Бумага`,
  );

  const mainTerms = ["✊ 1. Камень", "✌️ 2. Ножницы", "✋3. Бумага"];
  const randomIndex = Math.floor(Math.random() * mainTerms.length);
  const randomItem = mainTerms[randomIndex];

  if (userChoice === null || userChoice.trim() === "") {
    alert("Вы ничего не ввели");
     if (confirm("Ещё пример?")) {
    startGameRockStone();
  } else {
    alert("Спасибо за игру! 👋");
  }
    return;
  }

  if (!["1", "2", "3"].includes(userChoice.trim())) {
    alert("Введите 1, 2 или 3");
     if (confirm("Ещё пример?")) {
    startGameRockStone();
  } else {
    alert("Спасибо за игру! 👋");
  }
    return;
  }

  const user = Number(userChoice.trim());
  const comp = randomIndex + 1;

  // 1 - камень, 2 - ножницы, 3 - бумага
  const win =
    (user === 1 && comp === 2) ||
    (user === 2 && comp === 3) ||
    (user === 3 && comp === 1);

  if (user === comp) {
    alert(`🤝 Ничья! Компьютер загадал \n ${randomItem}`);
  } else if (win) {
    alert(`✅ Вы выиграли! Компьютер загадал \n ${randomItem}`);
  } else {
    alert(`❌ Вы проиграли, компьютер загадал \n ${randomItem}`);
  }

  if (confirm("Ещё пример?")) {
    startGameRockStone();
  } else {
    alert("Спасибо за игру! 👋");
  }
};

// Сменить фон
const startBtnEl = document.getElementById("startBtn");
const stopBtnEl = document.getElementById("stopBtn");
const main = document.getElementById("main");
const changeColorBtn = document.querySelector("colorStartBtn");
// Функция генерации случайного цвета
function getRandomColor() {
  const randomColor =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
  main.style.backgroundColor = randomColor;
}

startBtnEl.addEventListener("click", () => {
  main.style.backgroundColor = getRandomColor();
  stopBtnEl.style.display = "block";
});

stopBtnEl.addEventListener("click", () => {
  main.style.backgroundColor = "#202027";
  stopBtnEl.style.display = "none";
});

