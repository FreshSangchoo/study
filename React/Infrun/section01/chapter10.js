// for
//for (초기식; 조건식; 증감식) 
// 초기식: 변수(count)
// 조건식: 언제까지?
// 증감식: 매 반복마다 변수 증감
for (let idx = 1; idx <= 10; idx++) {
    if (idx % 2 === 0) {
        continue;
    }
    console.log(idx);
    if (idx >= 5) {
        break;
    }
}

