import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_SORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const saveUserInDB = async (userAuth) => {
  console.log(userAuth)
  const documentRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await documentRef.get()

  if (!snapshot.exists) {
    const {displayName, email} = userAuth

    try {
      documentRef.set({
        displayName,
        email,
        timeStamp: new Date()
      })
    } catch (error) {
      console.log('Error has occured during user saving', error)
    }
  }

  return documentRef
}



export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
