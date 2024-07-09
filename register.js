// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBPArtjVU0Y2fZN8gOTQ74LMyck58KzgRk",
authDomain: "login-6f052.firebaseapp.com",
projectId: "login-6f052",
storageBucket: "login-6f052.appspot.com",
messagingSenderId: "1044726570477",
appId: "1:1044726570477:web:6b469e26d7dd1ff798dbe4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//submit button

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event){
    event.preventDefault()

//inputs
const fname = document.getElementById('fname').value;
const lname = document.getElementById('lname').value;
const phone = document.getElementById('phone').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password, fname, lname, phone)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account...")
    window.location.href ="logins.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})