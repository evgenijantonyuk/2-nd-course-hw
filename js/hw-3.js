// task 1
let i = 0

do {
  console.log("Привет")
  i++
} while (i < 2)

// task 2
let a = 0

do {
      a++
    console.log(a)  
} while (a < 5)

// task 3 
let b = 6

do {
      b++
    console.log(b)  
} while (b < 22)

// task 4
const obj = {
      "Коля": '200',
      "Вася": '300',
      "Петя": '400'
}

for (const name in obj) {
     console.log(`${name} - зарплата ${obj[name]} долларов.`) 
}

// task 5
let number = 1000
let count = 0

while (number >= 50) {
    number /= 2
    count++;
    console.log(`Шаг ${count}: остаток от деления = ${number}`)
}

console.log(`Итоговый результат: ${number}`)
console.log(`Количество делений: ${count}`)

// task 6
// жестко фиксируем 5-е число — пятница
const firstFriday = 5 
            // или вручную вводим число
// let firstFriday = Number(prompt('Введите номер первой пятницы от 1 до 7:'))

      // Проверяем корректность
if (firstFriday < 1 || firstFriday > 7) {
    console.log('Ошибка: номер первой пятницы должен быть от 1 до 7')
} else {
      // Перебираем все пятницы с шагом 7 дней
    for (let day = firstFriday; day <= 31; day += 7) {
        console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`)
    }
}

// Extra task 1
let k = 100
const subtractor = 7
let iterations = 0

while (k > 0) {
      k -= subtractor
      iterations++
}

console.log(`Колличество итераций - ${iterations}`)
console.log(`В результате осталось - ${k}`)

// Extra task 2
const months = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
]

for (let i = 0; i < 12; i++) {
    console.log((i + 1) + '. ' + months[i]);
}

// Extra task 3
const book = {
      "Название": "Война и мир",
      "Автор": "Л. Н. Толстой",
      "Год издания": 1869,
      "Жанр": "роман-эпопея"
}
for (const key in book) {
      console.log(`${key}: ${book[key]}`)
}

// Extra task 4
const numbers = [
      2,
      7,
      25,
      31,
      -7,
      9,
      66,
      53,
      11,
      17
]
console.log(`Созданный массив: ${numbers}`)
let minNumber = numbers[0]
for (let i = 1; i < 10; i++) {
    if (numbers[i] < minNumber) {
        minNumber = numbers[i];
    }
}
console.log(`Минимальное число: ${minNumber}`)