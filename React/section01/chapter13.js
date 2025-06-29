// 1. 콜백함수
function main(value) {
    // console.log(1);
    // console.log(2);
    value();
    // console.log("end");
}

main(() => {
    // console.log("I am sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

// function repeatDouble(count) {
//     for (let idx = 1; idx <= count; idx++) {
//         console.log(idx * 2);
//     }
// }
// repeatDouble(5);
// 중복코드 제거 및 간결한 표현
repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, (idx) => {
    console.log(idx * 2);
})

repeat(5, (idx) => {
    console.log(idx * 3);
})