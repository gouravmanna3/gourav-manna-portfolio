import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB0evYEGyn3uxM_ftI0D_RFSTjwK0s2Qd8",
  authDomain: "resume-6478a.firebaseapp.com",
  databaseURL: "https://resume-6478a-default-rtdb.firebaseio.com",
  projectId: "resume-6478a",
  storageBucket: "resume-6478a.appspot.com",
  messagingSenderId: "463728484382",
  appId: "1:463728484382:web:81e0272a61ae7969674e0f",
  measurementId: "G-DMW3RJ85WD",
};

export const app = initializeApp(firebaseConfig);
