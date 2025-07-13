import * as ImagePicker from "expo-image-picker";
import React, { useRef } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function WebviewScreen() {
  const webviewRef = useRef<any>(null);

  const pickImage = async () => {
    // 권한 요청
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("앨범 접근 권한이 필요합니다!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      console.log("선택한 사진 URI:", imageUri);

      // WebView로 전달
      if (webviewRef.current) {
        webviewRef.current.postMessage(imageUri);
        console.log("imageUri 전달: ", imageUri);
      }
    }
  };

  const handleMessage = (event: any) => {
    console.log("WebView로부터 받은 메시지:", event.nativeEvent.data);

    if (event.nativeEvent.data === "OPEN_IMAGE_PICKER") {
      pickImage();
    } else {
      console.log("✅ WebView 로그:", event.nativeEvent.data);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webviewRef}
        source={{ uri: "https://emotion-diary-tau-eight.vercel.app/" }}
        style={{ flex: 1, marginTop: 24 }}
        onMessage={handleMessage}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
