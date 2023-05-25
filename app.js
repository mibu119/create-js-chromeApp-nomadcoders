// 대신 사용할 수 있는 코드
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 코드 리팩토링
// *form 태그를 사용할 경우에는 form 자체의 submit 이벤트를 사용하자. (버튼 사용 x)
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// 4.2 events에 관한 강의 다시 복습하기
function onLoginSubmit(event) {
  // const username = loginInput.value;
  // 자바스크립트를 이용한 값의 유효성 판별
  // if (username === "") {
  //   alert("Please write your name");
  // } else if (username.length > 15) {
  //   alert("Your name is too long, please write your name less than 15 letters");
  // }
  // 값의 유효성 판별은 html 브라우저 자체에서 제공한다. 그걸 이용하자.
  // 브라우저에서 기본으로 수행하는 동작 제어하기 (preventDefault) - 이를 이용하여 submit의 새로고침 제어
}

// **form 태그를 사용할 경우에는 form 자체의 submit 이벤트를 사용하자. (버튼 사용 x)
// loginButton.addEventListener("click", handleLogin);
// submit은 엔터나 버튼을 누를 때 이벤트가 발생한다.
loginForm.addEventListener("submit", onLoginSubmit);
