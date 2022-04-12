import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "tupstore-7138b.firebaseapp.com",
  projectId: "tupstore-7138b",
  storageBucket: "tupstore-7138b.appspot.com",
  messagingSenderId: "100945205863",
  appId: "1:100945205863:web:bebd0481a6d7985b8fd2c2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const store = getStorage();

export { auth, store };
