
// Определение места элемента в массиве
const alfabet = 'abcdef'
console.log(alfabet)

// 1. Разбиваем строку на массив букв
const alfabetArray = alfabet.split("") 
console.log(`Получаем массив ${alfabetArray}`)
// 2. Ищем букву в получившемся массиве
const hasC = alfabetArray.includes("c")
console.log(`Есть ли буква "с" - ${hasC}`) // true
// 3. Получаем индекс
const index = alfabetArray.indexOf("d")
console.log(`Индекс: ${index}`)


// Массивы
const numbers = [7, 2, 3, 4, 5]

for (i = 0 ; i < numbers.length; i++) {
      if(numbers[i] === 3) break
      console.log(numbers[i])
}

numbers.forEach((el, index) => {
      el += 1
      console.log(`${index}: ${el}`)
})

let text = 'Привет как дела?'
console.log(text)

textSplit = text.split(' ')
console.log(textSplit)

joinText = textSplit.join('*/*')
console.log(joinText)

console.log('Массив мутирует')
const numbersSort = [ 2, 5, 3, 1, 7, 2 ]
numbersSort.sort((a, b) => a - b)
console.log(numbersSort)

// Без мутации оригинального массива
const original = [3, 1, 2]
const sorted = original.toSorted((a, b) => a - b)
console.log('Без мутации оригинального массива');
console.log(original); // [3, 1, 2] (не изменился)
console.log(sorted);   // [1, 2, 3]

// Methods
let greetings = 'Hello'
console.log(greetings )

let arryGreetings = greetings.split('')
console.log(arryGreetings)

arryGreetings = arryGreetings.sort((a, b) => a.localeCompare(b, 'ru', { sensitivity: 'base' }))
console.log(arryGreetings)

arryGreetings = arryGreetings.join('')
console.log(arryGreetings)
// ===
let word = 'Привет=как=дела'
console.log(word)
      word = word.split('=')
console.log(word)

word = word.sort((a, b) => a.localeCompare(b, 'ru', { sensitivity: 'base' }))
console.log(word)

word = word.join(' ')
console.log(word)
// ==================
let products = []

products.push('bad')
console.log(products)

products.push('tabl', 'sofa')
console.log(products)

// =========================
const age = [10, 13, 45, 15, 37, 17, 21, 22]
const result = age.filter(el => el >= 20)
console.log(age)
console.log(result)

const salary = [ 5000, 7000, 10000, 25000, 15000]
const clearSalary = salary.map(elem => (elem - elem * 0.13))
console.log(salary)
console.log(clearSalary)

const arr = [1, 2, 4, 5, 4, 7, 9]
const resultArr = arr.reduce((intermediate, value) => intermediate + value)
//  сумма 1 и 2 числа + следующее число
console.log(resultArr)

// Многомерные массивы
let array = [
      [1, 2, 3],
      [4, 5, 6],
      [6, 8, 9],
] 
for (let arrIn of array) {
    for (let element of arrIn) {
      console.log(`Элементы многомерного массива - ${element}`)
    }  
}

let arrMax = [3, 5, 7, 5, 2, 9]
console.log(arrMax)
let arrMaxMin = Math.min(...arrMax)
console.log(arrMaxMin)
let arrMaxMax = Math.max(...arrMax)
console.log(arrMaxMax)
console.log(...arrMax)

let arrSum = [ 4, 6, 7, 9 ]
const sum = (a, b, ...rest) => {
      let result = a + b
      console.log(result)
      console.log(rest)
}
sum(...arrSum)
