
// Task 1
const arrayTask1 = [1, 5, 4, 10, 0, 3]
// Цикл For
      for (i = 0; i < arrayTask1.length; i++) {
            console.log(`Цикл до искомой цифры - ${arrayTask1[i]}`)
            if(arrayTask1[i] === 10) {
                  console.log(`Искомая цифра - ${arrayTask1[i]}`)
                  break
            }
      }
// Цикл For of
      for (const number of arrayTask1) {
            console.log(`Цикл до искомой цифры - ${number}`)
            if(number === 10)
            break
      }

// Task 2
const arrayTask2 = [1, 5, 4, 10, 0, 3]
console.log(`Массив ${arrayTask2}`)

const index = arrayTask2.indexOf(4)
console.log(`${index} - индекс числа 4`)

// Task 3
const arrayTask3 = [1, 3, 5, 10, 20]
const joinArrayTask3 = arrayTask3.join(', ')
console.log(joinArrayTask3)

// Task 4
// Task 5
// Task 6
// Task 7
// Task 8
// Task 9
// Task 10
// Task 11
// Task 12
// Task 13
// Task 14
// Task 15

//  Game quiz (Викторина)
const startQuiz = () => {
  const quiz = [
    {
      question: "Какого цвета небо?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2, // номер правильного ответа
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
  // "\n" - перенос на новую строку
  const results = quiz.map(({ ...item }) => {
    const message = `${item.question}\n${item.options.join("\n")}\n\nВведите номер ответа (1, 2 или 3):`;
    const userAnswer = +prompt(message);

    // Проверяем ответ и возвращаем 1 (правильно) или 0 (неправильно)
    const isCorrect = userAnswer === item.correctAnswer;

    if (userAnswer === item.correctAnswer) {
      alert("✅ Правильно!");
    } else if (userAnswer !== item.correctAnswer) {
      alert(`❌ Неправильно. Правильный ответ: ${item.correctAnswer}`);
    }
    return isCorrect ? 1 : 0;
  });

  // Считаем сумму правильных ответов
  const correctAnswersCount = results.reduce((sum, current) => sum + current);

  alert(
    `Викторина окончена! Ваш результат: ${correctAnswersCount} из ${quiz.length} правильных ответов.`,
  );
};
// =======================
