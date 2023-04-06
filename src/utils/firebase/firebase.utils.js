// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJdcfn9GSiRsd4n8Hq_IqB2ZjQyZAg8Sw",
  authDomain: "crown-clothing-db-9191f.firebaseapp.com",
  projectId: "crown-clothing-db-9191f",
  storageBucket: "crown-clothing-db-9191f.appspot.com",
  messagingSenderId: "1088760520024",
  appId: "1:1088760520024:web:4b8d0cd5107b58aa5fd92d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  propt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const creatUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);
  
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        })
    } catch (error) {
      console.log('Error creating the user', error.message);
    }

  }




};