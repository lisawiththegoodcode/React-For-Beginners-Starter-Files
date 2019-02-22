import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD2zshT0hFJwxyHx_zBcb43sZ5pSzpuGWY",
    authDomain: "catch-of-the-day-e8b1c.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-e8b1c.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export {firebaseApp};

//default
export default base;