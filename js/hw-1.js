
// 1
let a = 10
alert(`Первоначальное значение - ${a}`)
a = 20
alert(`Присвоенное значение - ${a}`)

// 2
const fistIponeYear = Number(2007)
alert(`Первая модель смартфона iPhone выпущена в ${fistIponeYear} году`)

// 3
const jsAuthor = String('Brendan Eich')
const jsCreated = Number(1995)
alert(`В ${jsCreated} году ${jsAuthor} создал язык програмирования JavaScript.`)

// 4
let var1 = 10
let var2 = 2

let sum = var1 + var2
let difference = var1 - var2
let multiplication = var1 * var2
let division = var1 / var2

alert (`Сумма - ${sum}`)
alert (`Вычитание - ${difference}`)
alert (`Умножение - ${multiplication}`)
alert (`Деление - ${division}`)

// 5
let two = 2
let result = two ** 5
alert(`Два в степени 5 - ${result}`)

// 6
let aA = 9
let b = 2
alert(`Остаток от деления равен - ${aA % b}`)

// 7
let num = 1
num += 5
num -= 3
num *= 7
num /= 3
num++
num--
alert(num)

// 8
let age = prompt('Сколько вам лет?')
alert(`Возраст - ${age} лет.`)

// 9
const user = {
      name: 'John',
      age: 31,
      isAdmin: true
}

// 10
let client = prompt('Как Ваше имя?')
alert(`Привет, ${client}`)

// ==================== Дополнительное задание
let number = prompt('Загадайте любое число')

let writtenNumber = number * 2
alert(`Умножили на 2, получаем - ${writtenNumber}`)

let writtenNumberPlusTen = writtenNumber + 10
alert(`К результату добавим 10, получаем - ${writtenNumberPlusTen}`)

let dividedNumber = writtenNumberPlusTen / 2
alert(`Полученное число делим на 2, получаем -  ${dividedNumber}`)

let resultNumber = dividedNumber - number
alert(`Вычитаем загаданное число и получаем - ${resultNumber}`)

alert(`Ответ равен ${resultNumber}`)

