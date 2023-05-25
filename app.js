// 대신 사용할 수 있는 코드
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 코드 리팩토링
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLogin() {
  const username = loginInput.value;
  // 값의 유효성 판별
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long, please write your name less than 15 letters");
  }
}

loginButton.addEventListener("click", handleLogin);
