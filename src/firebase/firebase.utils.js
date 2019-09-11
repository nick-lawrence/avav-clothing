import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCUN4lWQOuQyYh6Bmyy50QS8ZJUKx_Qq1w",
    authDomain: "avav-clothing.firebaseapp.com",
    databaseURL: "https://avav-clothing.firebaseio.com",
    projectId: "avav-clothing",
    storageBucket: "",
    messagingSenderId: "803335372504",
    appId: "1:803335372504:web:7475a1b430f6f6ea0921ad"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account ' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;