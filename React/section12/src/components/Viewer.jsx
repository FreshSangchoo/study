import { getEmotionImage } from "../util/get-emotion-image";
import "./Viewer.css";
import { emotionList } from "../util/constants";

const Viewer = ({ emotionId, content, uploadedImage }) => {
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );

  console.log(emotionId, content, uploadedImage);
  if (window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(
      "Viewer uploadedImage: " + uploadedImage
    );
  }

  return (
    <div className="Viewer">
      <section className="img_section">
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      {!uploadedImage && <div>웹뷰 아님</div>}
      {uploadedImage && (
        <section className="uploaded_image_section">
          <h4>오늘의 사진</h4>
          <img
            src={uploadedImage}
            alt="Uploaded"
            style={{ width: "300px", marginTop: "10px" }}
          />
        </section>
      )}
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
