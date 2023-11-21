import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtvsR7K2EhdiLCXHkRsSdUapNHLGAPFjs",
  authDomain: "pokedex-7a9ff.firebaseapp.com",
  projectId: "pokedex-7a9ff",
  storageBucket: "pokedex-7a9ff.appspot.com",
  messagingSenderId: "19588563753",
  appId: "1:19588563753:web:b745203acba6d6a08ead38"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}