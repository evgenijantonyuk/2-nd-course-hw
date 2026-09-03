// task 1
let password = "pass";
// не использовал ".toLocaleLowerCase()" т.к. для пароля это не используется, каждая буква и регистр имеет значение
let userPassword = String(prompt("Введите пароль:"));

if (password === userPassword) {
  console.log("Пароль введен верно");
} else {
  console.log("Пароль введен неправильно");
}

//  task 2
let c = 11;
if (c > 0 && c < 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
// task 3
let d = 55;
let e = 145;
if (d > 100 || e > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

// task 4
let a = "2";
let b = "3";

alert(a + b);
// Ответ:
alert(+a + +b);

// task 5
let monthNumber = Number(prompt("Введите номер месяца (1-12):"));

if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
  console.log("Нет такого месяца");
} else {
  let season;

  switch (monthNumber) {
    case 12:
    case 1:
    case 2:
      season = "Зима";
      console.log(season);
      break;
    case 3:
    case 4:
    case 5:
      season = "Весна";
      console.log(season);
      break;
    case 6:
    case 7:
    case 8:
      season = "Лето";
      console.log(season);
      break;
    case 9:
    case 10:
    case 11:
      season = "Осень";
      console.log(season);
      break;
    default:
      season = "неизвестно";
  }
}

// extra task 1
let inputNumber = Number(prompt("Пожалуйста, введите любое число"));

if (typeof inputNumber !== "number" || isNaN(inputNumber)) {
  alert("Введено не числовое значение");
} else if (inputNumber % 2 === 0) {
  alert("Число четноe");
} else {
  alert("Число нечетноe");
}

// extra task 2
let clientOS = Number(prompt("Введите Вашу операционную систему 0 это iOS, 1 это Android"));

if (clientOS === 0) {
  console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS === 1) {
  console.log("Установите версию приложения для Android по ссылке");
} else {
  console.log("Неизвестная операционная система");
}

// extra task 3
let clientDeviceYearIf = Number(2015);
let clientOsIf = Number(prompt("Введите Вашу операционную систему 0 это iOS, 1 это Android"));
let manufacturedIf = Number(prompt("Введите год выпуска Вашего смартфона"));

if (clientOsIf === 0 && manufacturedIf < clientDeviceYearIf) {
  console.log("Установите облегченную версию приложения для iOS по ссылке");
} else if (clientOsIf === 0 && manufacturedIf >= clientDeviceYearIf) {
  console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOsIf === 1 && manufacturedIf < clientDeviceYearIf) {
  console.log("Установите облегченную версию приложения для Android по ссылке");
} else if (clientOsIf === 1 && manufacturedIf >= clientDeviceYearIf) {
  console.log("Установите версию приложения для Android по ссылке");
} else {
  console.log("Неизвестная операционная система");
}

// используя switch
let clientDeviceYear = Number(2015);
let clientOs = Number(prompt("Введите Вашу операционную систему 0 это iOS, 1 это Android"));
let manufactured = Number(prompt("Введите Год выпуска Вашего смартфона"));

switch (clientOs) {
  case 0:
    if (manufactured < clientDeviceYear) {
      console.log("Установите облегченную версию приложения для iOS по ссылке, смартфон ранее 2015 года выпуска.");
    } else {
      console.log("Установите версию приложения для iOS по ссылке, поддерживается свежее ПО");
    }
    break;
  case 1:
    if (manufactured >= clientDeviceYear) {
      console.log(
        "Установите облегченную версию приложения для Android по ссылке, смартфон ранее 2015 года выпуска.",
      );
    } else {
      console.log("Установите версию приложения для Android по ссылке, поддерживается свежее ПО");
    }
    break;
  default:
    console.log("Неизвестная операционная система");
}
