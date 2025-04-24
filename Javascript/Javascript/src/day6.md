1. 비동기 처리

비동기란?

동기와 비동기

동기 - 하나의 작업이 실행되는 동안은 다른 작업을 수행하지 않는 방식

console.log(1);
console.log(2);
console.log(3);
console.log(4);

비동기 - 작업이 종료되기를 기다리지 않고 다음 작업을 병렬적으로 수행하는 방식

Javascript는 싱글스레드 언어 -> 멀티 스레드 방식은 불가, 비동기로 처리해야함

setTimeout(()=>{}, delayTime);

2. 프로미스 객체

프로미스 객체가 생성될 때 자동으로 실행
const executor = (resolve, reject) => {
// 코드
}
성공했을 때 resolve, 실패했을 때 reject

const promise = new Promise(executor);

프로미스 객체를 반환한 값에 .then으로 성공했을 때의 코드 반환

async await

results = await Promise.all([workA, workB, workC])

=> A, B, C 순서

4. API 호출

let response = fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>console.log(res)).catch((err)=>console.log(err));
