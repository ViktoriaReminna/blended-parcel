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

/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - 
більше на 10 пікселів.
*/

// const decreaseBtn = document.querySelector('#decrease');
// const increaseBtn = document.querySelector('#increase');
// const boxEl = document.querySelector('#box');

// decreaseBtn.addEventListener('click', onClickDecrease);
// function onClickDecrease() {
//   const currentWidth = boxEl.getBoundingClientRect().width;
//   const afterClickWidth = currentWidth - 10;
//   boxEl.style.width = `${afterClickWidth}px`;
//   boxEl.style.height = `${afterClickWidth}px`;

//   console.log(afterClickWidth);
// }

// increaseBtn.addEventListener('click', onClickIncrease);
// function onClickIncrease() {
//   const currentWidth = boxEl.getBoundingClientRect().width;
//   const afterClickWidth = currentWidth + 10;
//   boxEl.style.width = `${afterClickWidth}px`;
//   boxEl.style.height = `${afterClickWidth}px`;

//   console.log(afterClickWidth);
// }

//TODO:==============================================

/*
Завдання 5
Написати функцію, яка буде створювати список подій клавіатури event.key та event.code
Додати класи на список eventList, на елементи eventCode та eventKey
*/

// const eventThumbElement = document.querySelector('.eventThumb');
// document.addEventListener('keydown', clickListen);
// function clickListen(event) {
//   const markup = `<ul class="eventList">
//   <li class="eventCode">${event.code}</li>
//   <li class="eventKey">${event.key}</li>
//   </ul>`;

//   eventThumbElement.insertAdjacentHTML('beforeend', markup);
// }
