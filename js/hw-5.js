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

