// Home work
console.log('игра "Камень, ножницы бумага"')

    const startGameRockStone = () => {
    const userChoice = prompt(`Выберите цифру с вариантом, который Вы выбрали:\n ✊1. Камень, ✌️2. Ножницы, ✋3. Бумага`)

    const mainTerms = ['✊ 1. Камень', '✌️ 2. Ножницы', '✋3. Бумага']
    const randomIndex = Math.floor(Math.random() * mainTerms.length)
    const randomItem = mainTerms[randomIndex]

    if (userChoice === null || userChoice.trim() === '') {
        alert('Вы ничего не ввели')
        return
    }

    if (!['1', '2', '3'].includes(userChoice.trim())) {
        alert('Введите 1, 2 или 3')
        return
    }

    const user = Number(userChoice.trim())
    const comp = randomIndex + 1

    // 1 - камень, 2 - ножницы, 3 - бумага
    const win = (user === 1 && comp === 2) ||
                (user === 2 && comp === 3) ||
                (user === 3 && comp === 1)

    if (user === comp) {
        alert(`🤝 Ничья! Компьютер загадал \n ${randomItem}`)
    } else if (win) {
        alert(`✅ Вы выиграли! Компьютер загадал \n ${randomItem}`)
    } else {
        alert(`❌ Вы проиграли, компьютер загадал \n ${randomItem}`)
    }

    if (confirm("Ещё пример?")) {
        startGameRockStone();
    } else {
        alert("Спасибо за игру! 👋");
    }
}
// =========================================================
console.log('Task 1')
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
]
// Допишите колбэк для sort, изучите, как работает колбэк, в документации
console.log(people.sort((a, b) => a.age - b.age))
// =========================================================
console.log('Task 2')

function isPositive(number) {
     return number > 0
}

function isMale(person) {
     return person.gender === 'male' 
}

function filter(array, ruleFunction) {
        const result = []

  for (let i = 0; i < array.length; i++) {
    if (ruleFunction(array[i], i, array)) {
      result.push(array[i])
    }
  }
  return result
}

console.log(filter([3, -4, 1, 9], isPositive))

const peopleTask2 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
]
console.log(filter(peopleTask2, isMale))

// =============================================================
// console.log('Task 3')

let count = 0;

const intervalId = setInterval(() => {
  console.log(new Date().toLocaleString('ru-RU'))
  count++

  if (count === 10) {
    clearInterval(intervalId)
    console.log('30 секунд прошло')
  }
}, 3000)
// =============================================================
// console.log('Task 4')

function delayForSecond(callback) {
      // Код писать можно только внутри этой функции
  setTimeout(callback, 1000)
  // Если убрать вызов колбэка, то функция вызовется через указанное выше время, сейчас же она вызывается сразу и через указанное время

//   callback()
}
delayForSecond(function () {
  console.log('Привет, Глеб!')
})
// =============================================================
// console.log('Task 5')

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb() }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'))