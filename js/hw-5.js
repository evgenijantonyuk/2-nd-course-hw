// Task 1
console.log("Task 1");
const arrayTask1 = [1, 5, 4, 10, 0, 3];
// Цикл For
for (i = 0; i < arrayTask1.length; i++) {
  console.log(`Цикл до искомой цифры - ${arrayTask1[i]}`);
  if (arrayTask1[i] === 10) {
    console.log(`Искомая цифра - ${arrayTask1[i]}`);
    break;
  }
}
// Цикл For of
for (const number of arrayTask1) {
  console.log(`Цикл до искомой цифры - ${number}`);
  if (number === 10) break;
}

// Task 2
console.log("Task 2");
const arrayTask2 = [1, 5, 4, 10, 0, 3];
console.log(`Массив ${arrayTask2}`);

const index = arrayTask2.indexOf(4);
console.log(`${index} - индекс числа 4`);

// Task 3
console.log("Task 3");
const arrayTask3 = [1, 3, 5, 10, 20];
const joinArrayTask3 = arrayTask3.join(" ");
console.log(`Элементы массива - ${joinArrayTask3}`);

// Task 4
console.log("Task 4")
let arrayTask4 = []
for (let i = 0; i < 3; i++) {
  let row = [] // Главная строка
  
  for (let j = 0; j < 3; j++) {
    row.push(1) // Внутренняя строка
  }
  // Добавляем готовую строку в главный массив
  arrayTask4.push(row)
}
console.log(arrayTask4)

// Task 5
console.log("Task 5");
const arrayTask5 = [1, 1, 1];

for (k = 0; k < 3; k++) {
  arrayTask5.push(2);
}
console.log(`Полученный массив - ${arrayTask5}`)

// Task 6
console.log("Task 6");

const arrayTask6 = [9, 8, 7, "a", 6, 5];
console.log(`Исходный массив - ${arrayTask6}`)

const arraySort = arrayTask6.sort();
console.log(`Отсортированный массив - ${arraySort}`)

const filteredTask6 = arraySort.filter((item) => item !== "a");
console.log(`Массив без буквы "а" - ${filteredTask6}`)

// Task 7
console.log("Task 7");
const arrayTask7 = [9, 8, 7, 6, 5];
alert(` Запомните числа: ${arrayTask7}`);
const questionForUser = String(prompt("Угадайте число из массива чисел"));
const userInput = Number(questionForUser);

if (arrayTask7.includes(userInput)) {
  alert("✅ Угадал");
} else {
  alert("❌ Нет такого числа.");
}

// Task 8
console.log("Task 8");
const stringTask8 = String("abcdef");
console.log(stringTask8);

const stringTask8Rev = stringTask8.split("").reverse().join("");
console.log(stringTask8Rev);

// Task 9
console.log("Task 9");
const arrayTask9 = [
  [1, 2, 3],
  [4, 5, 6],
];
const flatArrayTask9 = arrayTask9.reduce((acc, row) => acc.concat(row), []);
console.log(flatArrayTask9);

// Task 10
console.log("Task 10");
const arrayTask10 = [2, 4, 3, 5, 6, 2, 9, 5, 8, 9];
console.log(arrayTask10);
for (let i = 0; i < arrayTask10.length - 1; i++) {
  const current = arrayTask10[i];
  const next = arrayTask10[i + 1];
  const sum = current + next;

  console.log(`Индекс ${i}: сумма ${current} + ${next} = ${sum}`);
}

// Task 11
console.log("Task 11");
const arrayTask11 = [2, 4, 3, 5, 6, 2, 9, 5, 8, 9];
console.log(arrayTask11);

function getSquares(arrayTask11) {
  return arrayTask11.map((num) => num * num);
}
const resultArray = getSquares(arrayTask11);
console.log(resultArray);

// Task 12
console.log("Task 12");

function getWordLengths(arrayTask12) {
  return arrayTask12.map((arrayTask12) => arrayTask12.length);
}
const arrayTask12 = ["яблоко", "банан", "груша", "апельсин"];
console.log(`Представленный массив слов - ${arrayTask12}`);

const lengths = getWordLengths(arrayTask12);
console.log(`Длинна каждого слова в массиве - ${lengths} букв.`);

// Task 13
console.log("Task 13");
const arrayTask13 = [4, -5, 0, 12, -8, -1, 7, -3];
console.log(`Массив отрицательных и положительных чисел - ${arrayTask13}`);
const negativeNumbers = getNegativeNumbers(arrayTask13);

function getNegativeNumbers(arrayTask13) {
  return arrayTask13.filter((num) => num < 0);
}
console.log(`Только отрицательные числа массива - ${negativeNumbers}`);

// Task 14
console.log("Task 14");
const arrayTask14 = [];
for (let i = 0; i < 10; i++) {
  arrayTask14.push(Math.floor(Math.random() * 11));
}
const evenArray = arrayTask14.filter((num) => num % 2 === 0);

console.log(`Изначальный массив - ${arrayTask14}`);
console.log(`Массив с четными значениями - ${evenArray}`);

// Task 15
console.log("Task 15");
const arrayTask15 = [];
for (let i = 0; i < 6; i++) {
  arrayTask15.push(Math.floor(Math.random() * 10) + 1);
}
console.log(`Массив чисел - ${arrayTask15}`);

const sum = arrayTask15.reduce((acc, num) => acc + num, 0);
// среднее арифметическое
const average = sum / arrayTask15.length;

console.log(`Среднее арифметическое: ${average}`);

//  Game quiz (Викторина)
const startQuiz = () => {
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
  ]

  const results = []

  // Функция для опроса одного вопроса (возвращает 1 или 0)
  const askQuestion = (item) => {
    let userAnswer = null;
    let valid = false;

    while (!valid) {
      const input = prompt(
        `${item.question}\n${item.options.join("\n")}\n\nВведите номер ответа (1, 2 или 3):`
      )

      // Кнопка "Отмена" – прерываем всю викторину
      if (input === null) {
        throw new Error("cancel")
      }

      // Пустой ввод – просим ввести заново
      if (input.trim() === "") {
        alert("Вы не ввели ответ. Пожалуйста, введите число 1, 2 или 3.")
        continue;
      }

      const number = Number(input)

      // Некорректный ввод (не число, дробное, вне диапазона)
      if (!Number.isInteger(number) || number < 1 || number > 3) {
        alert("Некорректный ввод. Введите число 1, 2 или 3.")
        continue
      }

      userAnswer = number
      valid = true
    }

    const isCorrect = userAnswer === item.correctAnswer;
    alert(isCorrect ? "✅ Правильно!" : `❌ Неправильно. Правильный ответ: ${item.correctAnswer}`);
    return isCorrect ? 1 : 0;
  }

  try {
    // Проходим по всем вопросам с помощью map
    quiz.map((item) => {
      const result = askQuestion(item);
      results.push(result)
    })

    // Если все вопросы отвечены – показываем итоговый результат
    const correctCount = results.reduce((sum, val) => sum + val, 0)
    alert(
      `Викторина окончена! Ваш результат: ${correctCount} из ${quiz.length} правильных ответов.`
    )
  } catch (error) {
    // Отмена – показываем результат за уже отвеченные вопросы
    const answeredCount = results.length
    const correctCount = results.reduce((sum, val) => sum + val, 0)
    alert(
      `Вы прервали игру. Ваш результат: ${correctCount} из ${answeredCount} отвеченных вопросов.`
    )
  }
}

// =======================
