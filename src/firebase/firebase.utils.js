import firebase from 'firebase/compat/app' ;
import 'firebase/compat/firestore';
import 'firebase/compat/auth' ;


const config = {
    apiKey: "AIzaSyBjevYIjSQUXucQ-AHUJlkRznngcAHRw1k",
    authDomain: "crwn-db-68ea2.firebaseapp.com",
    projectId: "crwn-db-68ea2",
    storageBucket: "crwn-db-68ea2.appspot.com",
    messagingSenderId: "241382051621",
    appId: "1:241382051621:web:0e247ad95cade4165554cc",
    measurementId: "G-YHWXCBFYBD"
  };


  firebase.initializeApp(config) ;

  export const auth = firebase.auth() ;
  export const firestore = firebase.firestore() ;


  const provider = new firebase.auth.GoogleAuthProvider() ;
  provider.setCustomParameters({ prompt : 'select_account' }) ;
  export const signInWithGoogle = () => auth.signInWithPopup(provider) ;
  export default firebase ;