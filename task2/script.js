const  exampleConsole = document.querySelector('#consoleLog');
exampleConsole.addEventListener('click', () => {
    // тело обработчика
    alert('Метод для вывода сообщения в консоли пользователя.');
})


const  exampleAlert = document.querySelector('#alert');
exampleAlert.addEventListener('click', 
  (event) => {
    // тело обработчика
    alert('Метод для вывода сообщения в браузере пользователя.');
})

const  examplePrompt = document.querySelector('#prompt');
examplePrompt.addEventListener('click', 
  (event) => {
    // тело обработчика
    alert('Метод для вывода сообщения в браузере пользователя с возможностью ввода текста.');
})




