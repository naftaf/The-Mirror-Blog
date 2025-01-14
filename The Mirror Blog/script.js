/* === Imports === */
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { signIsnWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

/* === FIREBASE SETUP === */
const firebaseConfig = {
apiKey: "AIzaSyDM-jfigZF6W3n-igzKPWxwZq2JEcaIQL4",
authDomain: "the-mirror-blog.firebaseapp.com",
databaseURL: "https://the-mirror-blog-default-rtdb.firebaseio.com",
projectId: "the-mirror-blog",
storageBucket: "the-mirror-blog.firebasestorage.app",
messagingSenderId: "876746537077",
appId: "1:876746537077:web:125ffe67b7a761d7be603c",
measurementId: "G-6PB4583T6T"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/* === UI === */


/* == UI - Elements == */


/* == UI - Event Listeners == */


/* === Main Code === */


/* === Functions === */

function authSignInWithEmail() {
    console.log("Sign in with email and password")
    const auth = getAuth();
    const email = emailInputEl.value; 
    const password = passwordInputEl.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        showLoggedInView();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}

/* Create account with email */
function authCreateAccountWithEmail() {
    console.log("Sign up with email and password")
    const email = emailInputEl.value;
    const password = passwordInputEl.value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        showLoggedInView();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
}


/* = Functions - Firebase - Authentication = */

/* == Functions - UI Functions == */
