// Функция Timer
const timer = (deadline) => {
  if (isNaN(+deadline)) {
    // + − приводим значение к number, если это NaN,
    console.log("Передано некорректное число"); // выводим сообщение
    const deadline = prompt("На сколько секунд вы хотите поставить таймер?");
    timer(deadline);
    // return; // Выходим из функции
  }

  let time = deadline;
  const interval = setInterval(() => {
    time -= 1;
    console.log(time);
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    console.log("Время истекло!");
  }, deadline * 1000);
};

const deadline = prompt("На сколько секунд вы хотите поставить таймер?");
timer(deadline);

// Колбэки и отложенные операции
// Имитация загрузки файла с Прогрессом и Обработкой

// Имитация загрузки файла
function uploadCompleted() {
  console.log("Загрузка файла успешно завершена...");

  // Имитация обработки файла
  console.log("Обработка файла...");
  setTimeout(() => {
    console.log("Файл обработан.");

    // Имитация сохранения файла
    console.log("Сохранение файла....");
    setTimeout(() => {
      console.log("Файл успешно обработан и готов к использованию.");
    }, 1000); // Имитация задержки сохранения файла...
  }, 2000); //  Имитация задержки обработки файла...
}

function startpload(callback) {
      console.log('Начало загрузки...')

      let progress = 0
      const intervalId = setInterval(() => {
            // Имитация процесса загрузки 
            progress += Math.floor(Math.random() * 10 ) + 5 // Увеличиваем прогресс на случайное число от 5 до 15
            console.log(`Прогресс ${progress}%`)

            if (progress >= 100) {
                  clearInterval(intervalId) // Останавливаем интервал
                  console.log('Загрузка завешина.')
                  
                  if (callback) {
                        callback() // Вызываем callback после завершения                        
                  }
            }
      }, 2000 // Обновляем процесс каждые 2 сек
      )
}
// Запуск функции с отдельной функцией обратного вызова
startpload(uploadCompleted)
