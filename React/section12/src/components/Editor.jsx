import { useEffect, useState } from "react";
import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";
import { useNavigate } from "react-router-dom";

import { emotionList } from "../util/constants";

import { getStringedDate } from "../util/getStringedDate";

const Editor = ({ onSubmit, initData }) => {
  const nav = useNavigate();
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
    uploadedImage: null,
  });

  const [isWebView, setIsWebView] = useState(false);

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  // WebView 환경 체크
  useEffect(() => {
    if (window.ReactNativeWebView) {
      setIsWebView(true);
    }
  }, []);

  useEffect(() => {
    const listener = (e) => {
      if (typeof e.data === "string" && e.data.startsWith("file://")) {
        setInput((prev) => ({
          ...prev,
          uploadedImage: e.data,
        }));
      }
    };

    window.addEventListener("message", listener);
    document.addEventListener("message", listener);

    return () => {
      window.removeEventListener("message", listener);
      document.removeEventListener("message", listener);
    };
  }, []);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }
    setInput({
      ...input,
      [name]: value,
    });
  };

  // WebView에 업로드 요청
  const onClickUploadButton = () => {
    window.ReactNativeWebView.postMessage("OPEN_IMAGE_PICKER");
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: { name: "emotionId", value: item.emotionId },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          onChange={onChangeInput}
          value={input.content}
          placeholder="오늘은 어땠나요?"
        />
      </section>
      {isWebView && (
        <section className="image_section">
          <h4>사진 업로드</h4>
          <Button text={"사진 선택"} onClick={onClickUploadButton} />
          {input.uploadedImage && (
            <div style={{ marginTop: "10px" }}>
              <img src={input.uploadedImage} style={{ width: "200px" }} />
            </div>
          )}
        </section>
      )}
      <section className="button_section">
        <Button text={"취소하기"} onClick={() => nav(-1)} />
        <Button
          text={"작성완료"}
          type={"POSITIVE"}
          onClick={onClickSubmitButton}
        />
      </section>
    </div>
  );
};

export default Editor;
