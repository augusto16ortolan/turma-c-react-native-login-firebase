import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9zAnjixyP0wo4NJ5DtfdKUIwKNOCUUNA",
  authDomain: "fir-turma-c-atitus.firebaseapp.com",
  projectId: "fir-turma-c-atitus",
  storageBucket: "fir-turma-c-atitus.firebasestorage.app",
  messagingSenderId: "810662206107",
  appId: "1:810662206107:web:345e25598c4a20837bc43e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
