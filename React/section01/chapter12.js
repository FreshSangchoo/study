// 1. 함수 표현식
function funcA() {
    // console.log("funcA");
}

let varA = funcA;
// console.log(varA); // 함수 자체가 출력(괄호로 호출하지 않았기 때문)
varA(); // 함수 호출

// 호이스팅 불가
// 함수 선언식은 호이스팅 가능
// 함수 표현식은 변수 할당처럼 해당 코드 줄에 도달해야 호출 가능
let varB = function () { // 익명함수
    // console.log("funcB");
};
varB();

// 2. 화살표 함수
let varC = (value) => {
    console.log(value);
    return value + 1;
}

console.log(varC(10));