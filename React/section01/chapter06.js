// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것
let num = 10;
let str = "20";

const result = num + str;
// console.log(result)
// num 10이 str 10으로 변환

// 2. 명시적 형 변환
// -> 내장함수 등을 이용해서 직접 형 변환을 명시

// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
// console.log(10 + strToNum1);

let str2 = "10개"
let strToNum2 = parseInt(str2);
// console.log(strToNum2);
// 숫자만 포함하고 있지 않은 str을 number로 변환할 때 parseInt, 숫자가 문자 앞에 있어야함

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
// console.log(numToStr1 + "입니다");