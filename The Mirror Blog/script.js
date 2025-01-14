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
function authCreateAccountWithEmail() {
    console.log("Sign up with email and password")
        /*  Challenge:
       1 Import the createUserWithEmailAndPassword function from from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
       2 Use the code from the documentation to make this function work.
       3 Make sure to first create two consts, 'email' and 'password', to fetch the values from the input fields emailInputEl and passwordInputEl.
       4 If the creation of user is successful then you should show the logged in view using showLoggedInView()
       5 If something went wrong, then you should log the error message using console.error.
    */
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
