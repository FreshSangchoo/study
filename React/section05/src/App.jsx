import "./App.css";
import HookExam from "./components/HookExam";
import Register from "./components/Register";

// React의 컴포넌트가 리렌더링 되는 경우
// 1. 자신이 관리하는 State의 값이 변경된 경우
// 2. 자신이 제공받는 props의 값이 변경된 경우
// 3. 부모 컴포넌트가 리렌더링되는 경우

// 컴포넌트의 첫 글자는 대문자
function App() {
  return (
    <>
      <HookExam />
    </>
  );
}

export default App;
