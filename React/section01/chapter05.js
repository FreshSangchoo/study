// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;

// console.log(1 * "hello");

// 2. String Type
let myName = "홍길동";
let myLocation = "서울";

let introduce = myName + myLocation;
// console.log(introduce);

// 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
// console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
let none;
console.log(none);

// null과 undeifined의 차이
// undefined는 초기화하지 못했거나 존재하지 않는 값을 불러오려고할 때
// null은 직접 없는 것을 표현하려고 할 때