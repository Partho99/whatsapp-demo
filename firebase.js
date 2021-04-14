import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyADqkdh4jyoj7cga_RlAhRy36vkTTsiuX4",
    authDomain: "whatsapp-2-7416d.firebaseapp.com",
    projectId: "whatsapp-2-7416d",
    storageBucket: "whatsapp-2-7416d.appspot.com",
    messagingSenderId: "418946485630",
    appId: "1:418946485630:web:af4caec65902b073f1f72f"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};