const products = [
  "Хлеб Бородинский",
  "Молоко Молочник",
  "Коровка Молоко",
  "Груша Конференция",
];

const search = "молоко";

products.forEach((product) => {
  if (product.toLowerCase().includes(search.toLowerCase())) {
    console.log(product);
  }
});

// ===================
console.log("Случайные выходные");

function findWeekdayAndWeekendNextMonth() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // Индекс следующего месяца

  // Правильно определяем количество дней в следующем месяце
  const daysInNextMonth = new Date(year, month + 1, 0).getDate();

  let weekday, weekend;
  let foundWeekday = false;
  let foundWeekend = false;

  while (!foundWeekday || !foundWeekend) {
    let randomDay = Math.floor(Math.random() * daysInNextMonth) + 1;
    let date = new Date(year, month, randomDay);
    
    // ИСПРАВЛЕНО: .getDay() вместо .getDate()
    let dayOfWeek = date.getDay(); 

    // 1-5 — это понедельник-пятница
    if (!foundWeekday && dayOfWeek >= 1 && dayOfWeek <= 5) {
      weekday = date;
      foundWeekday = true;
    }
    
    // 0 и 6 — это воскресенье и суббота
    if (!foundWeekend && (dayOfWeek === 0 || dayOfWeek === 6)) {
      weekend = date;
      foundWeekend = true;
    }
  }

  console.log(`Будний день для отдыха в следующем месяце: ${weekday.toLocaleDateString()}`);
  console.log(`Выходной день для отдыха в следующем месяце: ${weekend.toLocaleDateString()}`);
}

findWeekdayAndWeekendNextMonth()

// ===================

// // =====================================================
// // Task 1
// console.log('Task 1')

// const stringTask1 = 'js'
// console.log(`Дана строка ${stringTask1}`);
// const upperCaseTask1 = stringTask1.toUpperCase()
// console.log(`Переведенная в заглавные буквы строка ${stringTask1} = ${upperCaseTask1}`)

// // Task 2
// console.log('Task 2')

// //  Game quiz (Викторина)
// const startQuiz = () => {
//   const quiz = [
//     {
//       question: "Какого цвета небо?",
//       options: ["1. Красный", "2. Синий", "3. Зеленый"],
//       correctAnswer: 2,
//     },
//     {
//       question: "Сколько дней в неделе?",
//       options: ["1. Шесть", "2. Семь", "3. Восемь"],
//       correctAnswer: 2,
//     },
//     {
//       question: "Сколько у человека пальцев на одной руке?",
//       options: ["1. Четыре", "2. Пять", "3. Шесть"],
//       correctAnswer: 2,
//     },
//   ]

//   const results = []

//   // Функция для опроса одного вопроса (возвращает 1 или 0)
//   const askQuestion = (item) => {
//     let userAnswer = null;
//     let valid = false;

//     while (!valid) {
//       const input = prompt(
//         `${item.question}\n${item.options.join("\n")}\n\nВведите номер ответа (1, 2 или 3):`
//       )

//       // Кнопка "Отмена" – прерываем всю викторину
//       if (input === null) {
//         throw new Error("cancel")
//       }

//       // Пустой ввод – просим ввести заново
//       if (input.trim() === "") {
//         alert("Вы не ввели ответ. Пожалуйста, введите число 1, 2 или 3.")
//         continue;
//       }

//       const number = Number(input)

//       // Некорректный ввод (не число, дробное, вне диапазона)
//       if (!Number.isInteger(number) || number < 1 || number > 3) {
//         alert("Некорректный ввод. Введите число 1, 2 или 3.")
//         continue
//       }

//       userAnswer = number
//       valid = true
//     }

//     const isCorrect = userAnswer === item.correctAnswer;
//     alert(isCorrect ? "✅ Правильно!" : `❌ Неправильно. Правильный ответ: ${item.correctAnswer}`);
//     return isCorrect ? 1 : 0;
//   }

//   try {
//     // Проходим по всем вопросам с помощью map
//     quiz.map((item) => {
//       const result = askQuestion(item);
//       results.push(result)
//     })

//     // Если все вопросы отвечены – показываем итоговый результат
//     const correctCount = results.reduce((sum, val) => sum + val, 0)
//     alert(
//       `Викторина окончена! Ваш результат: ${correctCount} из ${quiz.length} правильных ответов.`
//     )
//   } catch (error) {
//     // Отмена – показываем результат за уже отвеченные вопросы
//     const answeredCount = results.length
//     const correctCount = results.reduce((sum, val) => sum + val, 0)
//     alert(
//       `Вы прервали игру. Ваш результат: ${correctCount} из ${answeredCount} отвеченных вопросов.`
//     )
//   }
// }
// // =======================
