const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}

// player.sayHello();
// player.sayHello("lyn");
//변수
//null  타입,아무것도 없음, 그 변수에 아무것도 없음. null은 자연적으로 생기지 않는다. 프로그래머가 넣는 값
//undefinded 타입, 변수는 있지만 값을 주지 않은 것. 메모리에는 있는데 값이 없는 것

// 데이터 정리하는 법
// 배열 : [] 사용, 중간에 쉼
// 배열.push(데이터) - array 끝에 item을 하나 더 추가

// Object(겍체)
// const player = {
//     name: "nico",
//     points: 10,
//     fat: true,
//     sayHello : function(){
//      console.log("hello");
//     }
//   };

//   console.log(player);
//   console.log(player.name);
//   console.log(player["name"]);
//
//  function() : 반복적인 코드를 줄여주는 역할
// function 내부에서 외부로 실행됌
// javascript에서는 오버로딩이 작동이 되지 않는다.

// 조건문
// prompt() 사용자에게 입력값을 받는다. 입력값은 문자이다. 코드의 실행을 멈춘다. css 적용 불가능
// type of 변수명 변수의 타입을 아는 것
// 타입 변경
// 문자 -> 숫자 : parseInt()
// 문자를 parseInt하면 NaN(Not a Number)가 나온다
// isNaN = NaN인지 판별 해주는 함수, 반환값은 boolean

// DOM
// document = website를 의미
// document에서 자료 가져오는 방법
// document.getElementById("id") = id를 가져오는거
// javascript에서는 html 객체를 볼 수 있다.
// querySelector : CSS Selector을 그대로 사용
// h1.onclick = handleTitleClick으로 이벤트 추가 가능
// document.body는 가능하나 나머지 요소는 직접 querySelector이나 getElementById 등으로 찾아야함
// string을 변수에 저장하는 게 중요!
// input 안에 들어있는 것은 value
// input의 유효성 검사를 하기 위해서는 form 안에 있어야 한다.
// input안에 있는 button을 누르거나 submit인 input을 클릭하면 내가 작성한 form이 submit됌
// form이 submit될 때 마다 페이지가 새로고쳐짐
// event 발생할 때 브라우저가 네 function을 호출하게 되는데, 비어인 채로 호출하는 것이 아니라
// 첫번째 argument로써 추가적ㅇ니 정보를 가진 채 호출
// 첫번째 argument의 정보는 지금 막 벌어진 일들에 대한 정보
// preventDefault() : 어떤 event의 기본 행동이든지 발생되지 않도록 막는 것
// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저정하고 싶을 때 사용
// localStorage.setItem 로컬 저장소에 데이터 저장
// localStorage 뒤에 .removeItem, getItem, setItem
// 본인이 생성한 string이 반복될 경우 변수를 만들어서 활용!!
// 기능마다 세분화한 파일을 만들어서 관리하는 게 좋다.
// interval : 일정 시간마다 일어나도록 만드는 것
// setInterval은 두개의 argument를 받는다. 첫번째는 네가 실행하고자 하는 function, 두 번째는 호출되는
// function 간격을 몇 ms로 할 지 정한다.
// setTimeout : 먼저 호출하려고 하는 function을 넣어주고 얼마나 기다릴지 ms 단위로 넣어주면 됌
// padStart(a,b) : 해당 값의 길이가 a만큼 되지 않으면 b값을 앞에 추가 !
