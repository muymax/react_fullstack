import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDUGqlXQ7JiSeRmLj6TGYUhIsWl7xR4XOc",
    authDomain: "forms-test-47ffb.firebaseapp.com",
    databaseURL: "https://forms-test-47ffb.firebaseio.com",
    projectId: "forms-test-47ffb",
    storageBucket: "forms-test-47ffb.appspot.com",
    messagingSenderId: "431072799933"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export {
    firebase,
    firebaseDB,
    googleAuth
}

// firebaseDB.ref('users').orderByChild('lastname').equalTo('Ball').once('value')
// .then((snapshot)=>{
//     console.log(snapshot.val());
// })