//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

// const btnEl = document.querySelector('#alertButton');
// const inputEl = document.querySelector('#alertInput');

// function onBtnClick() {
//   console.log(inputEl.value);
//   inputEl.value = '';
// }

// btnEl.addEventListener('click', onBtnClick);

//TODO:==============================================
/*


// Завдання 2
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
// */

// const inputFirst = document.querySelector('#leftSwapInput');
// const inputSecond = document.querySelector('#rightSwapInput');

// const btnEl = document.querySelector('#swapButton');

// function secondClick() {
//   const changeInputFirst = inputFirst.value;
//   const changeInputSecond = inputSecond.value;
//   inputFirst.value = changeInputSecond;
//   inputSecond.value = changeInputFirst;
// }

// btnEl.addEventListener('click', secondClick);

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

// const inputPassword = document.querySelector('#passwordInput');
// const btnPassword = document.querySelector('#passwordButton');

// function thirdClick() {
//   if (inputPassword.type === 'text') {
//     inputPassword.type = 'password';
//     btnPassword.textContent = 'Розкрити';
//   } else if (inputPassword.type === 'password') {
//     inputPassword.type = 'text';
//     btnPassword.textContent = 'Сховати';
//   }
// }

// btnPassword.addEventListener('click', thirdClick);
