// 1. 대입 연산자
let var1 = 1;
// = 

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
// + - * / %
let num6 = (1 + 2) * 10;
// *, / 가 +, -보다 우선순위가 높음

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;
// console.log(num7);

// 4. 증감 연산자
let num8 = 10;
++num8; // 전위 연산
num8++; // 후위 연산
--num8;
num8--;

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

// console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2; // 동등 비교 연산자
let comp2 = 1 !== 2; // 비동등 비교 연산자
// console.log(comp1, comp2);
// ==만 쓰면 자료형이 같은지는 비교가 안됨
// ===은 자료형까지 비교
// console.log(1 == "1");
// console.log(1 === "1");

let comp3 = 2 > 1;
let comp4 = 2 < 1;
// console.log(comp3, comp4);
let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
// console.log(comp5, comp6);