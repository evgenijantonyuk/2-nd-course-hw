// task 1
const minNumber = (numberOne, numberTwo) =>{
      if (numberOne < numberTwo) {
          console.log(`Минимальное значение - ${numberOne}`)  
      } else if (numberOne === numberTwo) {
            let peer = numberOne === numberTwo
                  peer = 'Числа равны'
            console.log(`${peer} - ${numberOne}`)
      } else {
            console.log(`Минимальное значение - ${numberTwo}`)
      }
}
minNumber(25, 15)

// task 2
const isParity = (number) => {
      if (number % 2 === 0) {
            console.log(`${number} - число четное`)
      } else {
            console.log(`${number} - число не четное`)
      }
}
isParity(9)

// task 3
const squareNumber = (x) => x ** 2 

let square = squareNumber(5)
console.log(`Квадрат числа равен - ${square}`)

// task 4
const userAge = () => {
      let inputAge = Number(prompt('Сколько Вам лет'))
      if (inputAge < 0) {
            alert('Вы ввели неправильное значение')
      } else if (inputAge > 0 && inputAge <= 12) {
            alert('Привет, друг!')
      } else {
            alert('Добро пожаловать!')
      }
}
userAge()

// task 5
const multiplicationNumbers = () =>{
      const numberOne = prompt('Введите Первое число')
      const numberTwo = prompt('Введите Второе число')
       
    if (isNaN(numberOne && numberTwo)) {
      alert('Ошибка: Одно или оба значения не являются числом')
        return null
    } else if (numberOne === '' || numberTwo === '' || numberOne === 0 || numberTwo === 0) {
      alert('Ошибка: Одно или оба значения не указаны')
        return null
    }
    else {
       let multiplicationNumber = numberOne * numberTwo
      alert(`Произведение чисел равняется ${multiplicationNumber}`)
    }
}
multiplicationNumbers()

// task 6
const getUserNumber = () => {
    const input = prompt('Введите число:')
    // Если - «Отмена» – возвращаем null
    if (input === null) {
        return null
    }    
    const number = Number(input)    
    // Проверяем, является ли результат числом
    if (isNaN(number)) {
        alert('Ошибка: введённое значение не является числом.')
        return null
    }  else {
      let cubed = number ** 3
      alert(`Введенное число в кубе равняется ${cubed}`)
    }  
}
getUserNumber()

// task 7
const pi = 3.14

const circle1 = {
      radius: 5,
      getPerimeter () {
            return 2 * pi * this.radius
      },
      getArea () {
            return pi * this.radius ** 2
      }
}
console.log(`Периметр круга один равен ${circle1.getPerimeter()}`)
console.log(`Площадь круга один равна ${circle1.getArea()}`)
// ================
const circle2 = {
      radius: 15,
      getPerimeter () {
            return 2 * pi * this.radius
      },
      getArea () {
            return pi * this.radius ** 2
      }
}
console.log(`Периметр второго круга равен ${circle2.getPerimeter()}`)
console.log(`Площадь второго круга равна ${circle2.getArea()}`)

