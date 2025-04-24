// 미션 1
const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this.value); // 여기서 this는 무엇을 가리키나요?
    // obj
  },
  arrowFunction: function () {
    console.log(this.value); // 여기서 this는 무엇을 가리키나요?
    // 전역 공간 객체 -> function ()으로 수정
  },
};

obj.regularFunction(); // 출력: 42
// obj의 regularFunction method
obj.arrowFunction(); // 출력: undefined (이유를 설명해보세요)
// 화살표 함수로 작성하면 전역 공간의 객체를 가리킴
