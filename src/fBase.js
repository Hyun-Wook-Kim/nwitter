import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB6ikhzrnoikX51m62FvI935LvsfXCeUc4",
    authDomain: "nwitter-4b9ba.firebaseapp.com",
    projectId: "nwitter-4b9ba",
    storageBucket: "nwitter-4b9ba.appspot.com",
    messagingSenderId: "864696372761",
    appId: "1:864696372761:web:06aa3e42f694a681a9a488"
  };

  const firebaseApp = initializeApp(firebaseConfig);

export const authService = getAuth(firebaseApp);
