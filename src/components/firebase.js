import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyABrkVXIZmIPWsxrC-buQo4IPjBcjz-6Vo",
    authDomain: "more-hmwk.firebaseapp.com",
    databaseURL: "https://more-hmwk.firebaseio.com",
    projectId: "more-hmwk",
    storageBucket: "more-hmwk.appspot.com",
    messagingSenderId: "245836987986"
};
firebase.initializeApp(config);
export default firebase;