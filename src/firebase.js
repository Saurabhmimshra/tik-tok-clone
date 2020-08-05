import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpgr4tFfvb03rlDP8C4JqNRDvjohto_jE",
  authDomain: "tik-tok-clone-2ea8f.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-2ea8f.firebaseio.com",
  projectId: "tik-tok-clone-2ea8f",
  storageBucket: "tik-tok-clone-2ea8f.appspot.com",
  messagingSenderId: "470478150332",
  appId: "1:470478150332:web:c5218d0d14764fb9d50eb9",
  measurementId: "G-3FFDMW9GB2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
