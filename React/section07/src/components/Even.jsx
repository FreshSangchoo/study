import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    console.log("even mount");
    // 클린업, 정리함수
    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>짝수입니다</div>;
};

export default Even;
