import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'




const firebaseConfig = {
  apiKey: "AIzaSyD1m2eOBUt6EQEwKKl4tfP4Gd7aw21ZNLw",
  authDomain: "lsetf-project-f7261.firebaseapp.com",
  projectId: "lsetf-project-f7261",
  storageBucket: "lsetf-project-f7261.appspot.com",
  messagingSenderId: "130230947100",
  appId: "1:130230947100:web:2a9b839d05af56c7b97ed9"
};


const mypro = initializeApp(firebaseConfig);


export const mrpro = getFirestore(mypro)