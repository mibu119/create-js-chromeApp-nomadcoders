const clock = document.querySelector("h2#clock");

// interval 개념
// 매번 일어나야 하는 것
function sayHello() {
  console.log("hello");
}

// 두 개의 argument를 받음. 첫 번째는 콜백함수, 두 번째는 ms(몇 초마다 호출할 것인지 숫자로 입력)
setInterval(sayHello, 5000);
