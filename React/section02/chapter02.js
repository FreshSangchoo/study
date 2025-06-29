// function returnFalse() {
//     console.log("False 함수");
//     return undefined;
// }

// function returnTrue() {
//     console.log("True 함수");
//     return 10;
// }

// console.log(returnFalse() && returnTrue()); // F and ? = F (연산 결과 확정)

// console.log(returnTrue() && returnFalse()); // T and T = T, T and F = F (연산 결과 확정 X)

// console.log(returnTrue() || returnFalse()); // T and ? = T (연산 결과 확정)

// Truthy, Falsy한 값인 경우 그 값으로 바로 출력

// 단락 평가 활용 사례
function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}
printName();
printName({ name: "홍길동" });
// T || T 일 때 첫 번째 Truthy한 값인 "홍길동" 이 반환
// T && T 일 때 두 번째 Truthy한 값인 "person의 값이 없음 "이 반환