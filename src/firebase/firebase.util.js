import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
  apiKey: "AIzaSyBab8kL_GI8pAss7aX-gODbpCsedd-P71c",
  authDomain: "clothingapp-c09d8.firebaseapp.com",
  projectId: "clothingapp-c09d8",
  storageBucket: "clothingapp-c09d8.appspot.com",
  messagingSenderId: "919267986472",
  appId: "1:919267986472:web:a36162614c0ad81f85791d",
  measurementId: "G-S74HS1JLHB"
};

export const createUserProfileDocument=async (userAuth,additionalData)=>{
  if(!userAuth)return;

  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapShot=await userRef.get();
  if(!snapShot.exists)
  {
    const {displayName,email}=userAuth;
    const createdAt=new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
  
    }
    catch(error)
    {
     console.log('error creating user',error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

