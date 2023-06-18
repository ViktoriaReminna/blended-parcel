// Якщо імейл і пароль користувача збігаються, зберігайте дані з форми при сабмите
// у локальне сховище і змінюй кнопку login на logout і роби поля введення
// недоступними для зміни.

// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити
// logout - кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.

// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.

// const USER_DATA = {
//   email: 'user@mail.com',
//   password: 'secret',
// };
// const formRef = document.querySelector('#login-form');
// // console.dir(formRef);
// const { button, email, password } = formRef.elements;

// const logout = () => {
//   button.textContent = 'login';
//   email.removeAttribute('disabled');
//   password.removeAttribute('disabled');
//   localStorage.removeItem('login');
// };

// const isLogin = () => {
//   button.textContent = 'logout';
//   email.setAttribute('disabled', true);
//   password.setAttribute('disabled', true);
// };

// const onSubmit = event => {
//   event.preventDefault();
//   if (button.textContent === 'logout') {
//     logout();
//     return;
//   }
//   if (
//     email.value === USER_DATA.email &&
//     password.value === USER_DATA.password
//   ) {
//     const logNew = { email: email.value, password: password.value };
//     localStorage.setItem('login', JSON.stringify(logNew));
//     isLogin();
//     formRef.reset();
//   } else {
//     alert('Введіть правильні дані');
//   }
// };
// formRef.addEventListener('submit', onSubmit);

// const onLogin = JSON.parse(localStorage.getItem('login'));
// if (onLogin) {
//   isLogin();
// }

// ЗАДАЧА 1
// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

// const checkboxRef = document.querySelector('#checkbox');
// const body = document.querySelector('body');

// const currentTheme = localStorage.getItem('theme');

// switch (currentTheme) {
//   case 'dark':
//     body.classList.add('dark');
//     checkbox.checked = true;
//     break;
//   case 'light':
//     body.classList.add('light');
//     break;

//   default:
//     body.classList.add('light');
//     break;
// }

// checkboxRef.addEventListener('click', toggleTheme);
// function toggleTheme() {
//   if (checkbox.checked === true) {
//     body.classList.add('dark');
//     body.classList.remove('light');
//     localStorage.setItem('theme', 'dark');
//   }
//   if (checkbox.checked === false) {
//     body.classList.add('light');
//     body.classList.remove('dark');
//     localStorage.setItem('theme', 'light');
//   }
// }

// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

// const formRef = document.querySelector('#task-form');
// const listRef = document.querySelector('#list');

// const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
// addToList();

// formRef.addEventListener('submit', onSubmit);

// function onSubmit(event) {
//   event.preventDefault();
//   const task = event.target.taskName.value;
//   taskList.push(task);
//   console.log(taskList);

//   addToList();
//   addLocalStorageItem();
// }

// function addLocalStorageItem() {
//   localStorage.setItem('tasks', JSON.stringify(taskList));
// }

// function addToList() {
//   listRef.innerHTML = '';
//   taskList.forEach((task, index) => {
//     const liEl = `<li><p>${task}</p><button id="${index}">Delete</button></li>`;

//     listRef.innerHTML += liEl;
//   });
// }

// listRef.addEventListener('click', removeTask);

// function removeTask(event) {
//   const taskIndex = event.target.id;
//   taskList.splice(taskIndex, 1);
//   addToList();
//   addLocalStorageItem();
// }
