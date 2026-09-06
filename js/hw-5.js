// Task 1. Game quiz (Викторина)
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

// Task 2
