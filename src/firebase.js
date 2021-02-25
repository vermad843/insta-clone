 import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBoATCpxj-G8PKgbu7W2Zw7TZrHWKMSqhQ",
    authDomain: "instagram-clone-react-88b32.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-88b32.firebaseio.com",
    projectId: "instagram-clone-react-88b32",
    storageBucket: "instagram-clone-react-88b32.appspot.com",
    messagingSenderId: "701833955175",
    appId: "1:701833955175:web:a9928afdb95c5867f311c2",
    measurementId: "G-E4Z7GM5F7N"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

export {db, auth, storage};