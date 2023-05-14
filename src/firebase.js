import  firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyAJzD3Obzj0Wo0ysTF7MhX9dTjEi1RNpp4",
    authDomain: "linkedin-clone-4c122.firebaseapp.com",
    projectId: "linkedin-clone-4c122",
    storageBucket: "linkedin-clone-4c122.appspot.com",
    messagingSenderId: "713088303157",
    appId: "1:713088303157:web:e57a1bed2329574df1f17c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig); //to intitalize the app
const db = firebaseApp.firestore(); //database for our app
const auth = firebase.auth(); //for authentication for users
const provider = new firebase.auth.GoogleAuthProvider(); //for new users?
const storage = getStorage(firebaseApp); //storage for firebase

export { auth, provider, storage };
export default db;