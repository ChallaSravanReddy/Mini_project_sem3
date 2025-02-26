
//   ----------------------/Database Integration/-----------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyCmA17b1COox91GuzgaWCdCnTMTwIGUx80",
  authDomain: "keen-goods-438816-r1.firebaseapp.com",
  databaseURL: "https://keen-goods-438816-r1-default-rtdb.firebaseio.com",
  projectId: "keen-goods-438816-r1",
  storageBucket: "keen-goods-438816-r1.firebasestorage.app",
  messagingSenderId: "480933076935",
  appId: "1:480933076935:web:6b8fa770ee5d6023f443e2",
  measurementId: "G-RZ14MNE4GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
//-------------------------------/Fetching Data/-------------------------------
function fetchTranslation(shlokaNum= window.currentShlokaNum || 1, languageKey) {
  const tranRef = ref(
    database,
    `Shloka-${shlokaNum}/Translations/${languageKey}`
  );
  get(tranRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        document.getElementById("shloka-box").innerHTML = snapshot.val();
      } else {
        console.log("No data found.");
      }
    })
    .catch((error) => {
      console.log("Error translating.", error);
    });
}
//----------------------/Database Integration End/-----------------------

window.changeText = function (languageKey) {
  fetchTranslation(window.currentShlokaNum, languageKey);
};


//-----------------------------/Onclick functions/-----------------------------
window.navClick = async function (shlokaNumber) {
  window.currentShlokaNum = shlokaNumber;
  const mainRef = ref(database, `Shloka-${shlokaNumber}/main`);
  const audioRef = ref(database, `Shloka-${shlokaNumber}/aud`);
  const snapshot = await get(audioRef);
  const snapshot1 = await get(mainRef);
  if (snapshot.exists()) {
    const audioUrl = snapshot.val();
    document.getElementById("audPlayer").src = audioUrl;
  } else {
    console.error("No audio data found.");
  }
  if (snapshot1.exists()) {
    const mainText = snapshot1.val();
    document.getElementById("shloka-box").innerHTML = mainText;
  } else {
    console.error("No text data found.");
  }

};

function fetchmeaning(shlokaNum= window.currentShlokaNum || 1, meaningKey) {
  const meaningRef = ref(
    database,
    `Shloka-${shlokaNum}/meaning/${meaningKey}`
  );
  get(meaningRef)
    .then((snapshot2) => {
      if (snapshot2.exists()) {
        document.getElementById("meaning-box").innerHTML = snapshot2.val();
      } else {
        console.log("No data found.");
      }
    })
    .catch((error) => {
      console.log("Error translating.", error);
    });
}

window.changemean = function (meaningKey) {
  fetchmeaning(window.currentShlokaNum, meaningKey);
};