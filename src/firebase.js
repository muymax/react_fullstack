import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDGwpF_3qSiqAEJM5ZOJ6KBS41h426lViI",
    authDomain: "nba-full.firebaseapp.com",
    databaseURL: "https://nba-full.firebaseio.com",
    projectId: "nba-full",
    storageBucket: "nba-full.appspot.com",
    messagingSenderId: "799339835746"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
}


export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
}