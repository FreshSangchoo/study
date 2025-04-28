250429(화)
#3.1
TodoApp 프로젝트 기반 다지기

1. 프로젝트 생성
   npx @react-native-community/cli@latest init TodoApp

2. 오늘 날짜 가져오기
   const today = new Date();

- 참고: http://bit.ly/mdn-date

const year = today.getFullYear();
const month = today.getMonth()+1;  
const day = today.getDate();

- month는 0~11을 가져오므로 +1 해주기

3. StatusBar
   iOS와 Android를 모두 적용시키기 위해 서드 파티 라이브러리 사용

yarn add react-native-safe-area-context

- 참고: https://github.com/th3rdwave/react-native-safe-area-context

SafeAreaProvider, SafeAreaView 사용

- 이때 SafeAreaView는 해당 라이브러리의 요소를 사용할 것

const {top} = useSafeAreaInsets();

- StatusBar의 요소를 가져올 수 있음

4. Image 컴포넌트

<Image source={require('...')} resizemode="..." />

resizemode는 총 5가지 설정이 있음.

cover: 기본값. 이미지의 가로, 세로 비율을 유지한 상태로 이미지를 리사이징. 이미지와 뷰의 비율이 일치하지 않을 경우 이미지를 자름.

contain: 이미지의 비율을 유지하여 이미지의 모든 영역이 뷰 안에 보이도록 리사이징

stretch: 뷰의 크기, 비율대로 이미지의 비율도 리사이징

repeat: 뷰의 크기가 이미지보다 크면 바둑판식으로 이미지 반복

center: 이미지를 뷰의 중앙에 둠. 뷰가 이미지보다 크면 이미지는 원본 사이즈 그대로 유지.
