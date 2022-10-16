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

  export const createUserProfileDocument = async (userAuth , additionalData) => {
      if(!userAuth) return ;
      const userRef = firestore.doc(`users/${userAuth.uid}`) ;
      const snapShot = await userRef.get()

      if(!snapShot.exists){
        const { displayName ,email } = userAuth ,
         createdAt = new Date() ;
        try {
          await userRef.set({
            displayName,
            email ,
            createdAt ,
            ...additionalData
          })
        } catch (error) {
          console.log('error creating user' , error.message)
        }
      }
      return userRef ;
  }

  export const addCollectionAndDocuments = async (collectionKey ,objectsToAdd) => {
   const colelctionRef = firestore.collection(collectionKey)
   const batch = firestore.batch()
   objectsToAdd.forEach(obj => {
     const newDocRef =colelctionRef.doc();
     batch.set(newDocRef ,obj)
   })
    return await batch.commit()
  }


  firebase.initializeApp(config) ;

  export const convertCollectionsSnapshoToMap =(collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title ,items} = doc.data()
    return {
      routeName : encodeURI(title.toLowerCase()),
      id : doc.id,
      title,
      items
    }
  })
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  },{})
  }

  export const auth = firebase.auth() ;
  export const firestore = firebase.firestore() ;


  const provider = new firebase.auth.GoogleAuthProvider() ;
  provider.setCustomParameters({ prompt : 'select_account' }) ;
  export const signInWithGoogle = () => auth.signInWithPopup(provider) ;
  export default firebase ;