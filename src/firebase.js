import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAsnCVa_AxSX-4QnzZ6ROrslY_L930QFzo",
  authDomain: "mehfil-efd23.firebaseapp.com",
  projectId: "mehfil-efd23",
  storageBucket: "mehfil-efd23.appspot.com",
  messagingSenderId: "326776138693",
  appId: "1:326776138693:web:ec71494bf66f10f92179ac"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }