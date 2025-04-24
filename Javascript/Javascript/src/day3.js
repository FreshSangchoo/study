// const multi = (a, b) => a * b;

// console.log(multi(3, 4));

// const book = {
//   title: "제목",
//   author: "저자",
//   getSummary: function () {
//     console.log(`책 제목은 ${this.title}이고, 저자는 ${this.author}입니다.`);
//   },
// };

// book.getSummary();

function sumNumbers(a, b) {
  function addFive(number) {
    return number + 5;
  }
  return a + addFive(b);
}
console.log(sumNumbers(3, 7));
console.log(sumNumbers(10, 5));
