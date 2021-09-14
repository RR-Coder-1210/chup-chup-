
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCfe1Tf35Ymk2O99zM7BGYtnrPtAp7d3nY",
    authDomain: "hiju-b2af1.firebaseapp.com",
    databaseURL: "https://hiju-b2af1-default-rtdb.firebaseio.com",
    projectId: "hiju-b2af1",
    storageBucket: "hiju-b2af1.appspot.com",
    messagingSenderId: "563657958287",
    appId: "1:563657958287:web:30fcda93c1a645f20ca1fa"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function addUser() {

 var user_name= document.getElementById("user_name").value;
 firebase.database().ref('/').child(user_name).update({ purpose : "Adding the User" }); 

  }