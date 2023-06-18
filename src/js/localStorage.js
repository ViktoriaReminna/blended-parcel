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
