console.log(1);

// 비동기함수다 -> Web APIs에 위탁 -> 비동기처리가 끝나면 callback함수를 다시 넘겨줌
setTimeout(() => {
    console.log(2);
}, 3000);

console.log(3)