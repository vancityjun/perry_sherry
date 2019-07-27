import firebase from 'firebase';
      const config = {
    apiKey: "AIzaSyDWCgs-GilUNpngWoee8NfKUqsnCvgNf3c",
    authDomain: "perrysherry-c6162.firebaseapp.com",
    databaseURL: "https://perrysherry-c6162.firebaseio.com",
    projectId: "perrysherry-c6162",
    storageBucket: "",
    messagingSenderId: "153288497020",
    appId: "1:153288497020:web:9f69c399456b5c2e"
    };
    firebase.initializeApp(config);
    const db = firebase.firestore();
    db.settings({timestampsInSnapshots:true})
    export default db;