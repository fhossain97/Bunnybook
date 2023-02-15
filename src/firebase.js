import { initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

require("firebase/auth");

const firebaseConfig = {
  apiKey: process.env.REACT_APP_KEY,
  authDomain: process.env.REACT_APP_AD,
  projectId: process.env.REACT_APP_PID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId: process.env.REACT_APP_MID,
  appId: process.env.REACT_APP_AID,
  measurementId: process.env.REACT_APP_MMID
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const messagedb = getFirestore(app)