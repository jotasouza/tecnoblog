import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJFrmWJ2RCVnDGLcAtEVazoh4dbFOoN78",
  authDomain: "tecnoblog-8ae8c.firebaseapp.com",
  projectId: "tecnoblog-8ae8c",
  storageBucket: "tecnoblog-8ae8c.appspot.com",
  messagingSenderId: "912680244737",
  appId: "1:912680244737:web:2f77254683880b411c1200",
};

const app = initializeApp(firebaseConfig);

const dataBase = getFirestore(app);

export { dataBase };
