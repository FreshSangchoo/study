// 미션 1
function fakeApiCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John Doe", age: 30 });
    }, 2000);
  });
}

// fetchUserData 함수 완성
const fetchUserData = async () => {
  try {
    let response = await fakeApiCall();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

fetchUserData();

// 미션 2
const API_URL = "https://pokemon-api-ecru-eta.vercel.app";

const getData = async () => {
  try {
    let response = await fetch(API_URL);
    let data = await response.json();
    let array = await data.data.filter((val) => val.color === "green");
    console.log(array);
  } catch (error) {
    console.log(error);
  }
};
getData();
