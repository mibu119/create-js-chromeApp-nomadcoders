const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string만 담은 변수는 대문자 변수에 담는다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 4.2와 4.3 events에 관한 강의 다시 복습하기
function onLoginSubmit(event) {
  // 값의 유효성 판별은 html 브라우저 자체에서 제공한다. 그걸 이용하자.
  // 브라우저에서 기본으로 수행하는 동작 제어하기 (preventDefault) - 이를 이용하여 submit의 새로고침 제어
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // 사용자 이름 localStorage에 저장하기
  localStorage.setItem(USERNAME_KEY, username);
  // h1 태그 나타내기
  // 중복되는 동작은 하나의 함수로 합치자.
  // greeting.innerText = `Hello ${username}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  // *위의 함수에서 중복됨
  // greeting.innerText = `Hello ${savedUsername}`;
  // greeting.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}
