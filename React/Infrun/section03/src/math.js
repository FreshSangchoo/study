// math 모듈
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

// default를 붙이면 해당 파일을 대표하는 export, import 하는 파일에서 {} 없이 불러와야함
// 불러올 때 이름을 바꿔서 불러오기도 가능 
export default function multiply(a, b) {
    return a * b;
}

// commonjs 모듈
// module.exports = {
//     add,
//     sub,
// }

// ES 모듈
// export { add, sub };
