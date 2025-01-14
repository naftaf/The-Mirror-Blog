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
const viewLoggedOut = document.getElementById("logged-out-view")
const viewLoggedIn = document.getElementById("logged-in-view")
const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")
const signInButtonEl = document.getElementById("sign-in-btn")
const createAccountButtonEl = document.getElementById("sign-up-btn")
const signOutButtonEl = document.getElementById("sign-out-btn")
const userProfilePictureEl = document.getElementById("user-profile-picture")
const userGreetingEl = document.getElementById("user-greeting")

/* == UI - Event Listeners == */
signInButtonEl.addEventListener("click", authSignInWithEmail)
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail)
signOutButtonEl.addEventListener("click", authSignOut)


/* === Main Code === */
authFunction();

function authFunction() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        showLoggedInView();
        const uid = user.uid;
        showProfilePicture(userProfilePictureEl, user);
        showUserGreeting(userGreetingEl, user);
        // ...
      } else {
        // User is signed out
        // ...
        showLoggedOutView();
      }
    });
}

async function showProfilePicture(imgElement, user) {
    const auth = getAuth();
    if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const pfp = await displayImage();
        imgElement.src = URL.createObjectURL(pfp)
        const emailVerified = user.emailVerified;
    
        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
    }
 }

 async function displayImage() { 
    const response = await fetch('https://unsplash.it/1920/1080?random'); 
    const blob = await response.blob(); 
    return blob; 
 }
 
 function showUserGreeting(element, user) {
        const auth = getAuth();
        if (user !== null) {
            console.log(user.displayName);
          // The user object has basic properties such as display name, email, etc.
          if (user.displayName){
            element.textContent = "Hi " + user.displayName;
          }
          else {
            element.textContent = "Hey friend, how are you?";
          }
          const email = user.email;
          const photoURL = user.photoURL;
          const emailVerified = user.emailVerified;
        
          // The user's ID, unique to the Firebase project. Do NOT use
          // this value to authenticate with your backend server, if
          // you have one. Use User.getToken() instead.
          const uid = user.uid;
        }
 }


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

function authSignOut() {
    const auth = getAuth();
    signOut(auth).then(() => {
        showLoggedOutView();
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
}

/* == Functions - UI Functions == */
function showLoggedOutView() {
hideView(viewLoggedIn)
showView(viewLoggedOut)
}


function showLoggedInView() {
hideView(viewLoggedOut)
showView(viewLoggedIn)
}


function showView(view) {
view.style.display = "flex"
}


function hideView(view) {
view.style.display = "none"
}
