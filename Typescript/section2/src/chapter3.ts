// object
// 객체 리터럴 타입
// 구조를 기준으로 정의 => 구조적 타입 시스템 -> Property Based Type System
// 이름만을 기준으로 정의하는 시스템 => 명목적 타입 시스템
let user: {
  id?: number; // 있어도 되고 없어도 됨 -> 선택적 프로퍼티(optional property)
  name: string;
} = {
  id: 1,
  name: "홍길동",
};

user.id;

let dog: {
  name: string;
  color: string;
} = {
  name: "초코",
  color: "brown",
};

dog.name;

user = {
  name: "홍",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "My API KEY",
};

// config.apiKey = "hacked"; // readonly는 수정 불가
