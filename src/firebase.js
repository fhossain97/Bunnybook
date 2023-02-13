import { initializeApp } from "firebase/app";
import {getAuth, signInAnonymously, onAuthStateChanged, signOut} from 'firebase/auth'
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
export const auth = getAuth()
// const anon = signInAnonymously(auth)

// export const changedAuth = () => {onAuthStateChanged(auth, (user) => {
//     if (user) {
//         const idu = user.idu
//         return idu
//     } else {
// signOut(auth)
//     }
// })
// }

// export const isSignedIn = () => {
// signInAnonymously(auth)
//   .then(() => {
//     console.log('Signed in')
//   })
//   .catch((err) => {
//     console.log(err, 'Error in signing in user')
//     // ...
//   });
// }





export const messagedb = getFirestore(app)