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