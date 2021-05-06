import firebase from "firebase";
// import "firebase/auth";
// import "firebase/firestore";

var config = 
{
	apiKey: "AIzaSyAF4GRQG0N1J_zrI9W8jJkGxGJ4jhveQUU",
	authDomain: "luit-ec7a3.firebaseapp.com",
	databaseURL: "https://luit-ec7a3.firebaseio.com",
	projectId: "luit-ec7a3",
	storageBucket: "luit-ec7a3.appspot.com",
	messagingSenderId: "1043266914152",
	appId: "1:1043266914152:web:69cb706fabd98f0f8c38dd",
	measurementId: "G-W7Q22CXP2J"
};

firebase.initializeApp(config);

// const googleProvider = new firebase.auth.GoogleAuthProvider()

// export const signInWithGoogle = () => 
// {
// 	auth.signInWithPopup(googleProvider).then((res) => 
// 	{
//     	console.log(res.user)
//   	}).catch((error) => 
// 	{
//     	console.log(error.message)
//   	})
// }

var firebaseConfig = {
    apiKey: "AIzaSyBN4IXuOvrCvHG_UlkSNVJguPrOEfAAXpQ",
    authDomain: "otp-firebase-de610.firebaseapp.com",
    projectId: "otp-firebase-de610",
    storageBucket: "otp-firebase-de610.appspot.com",
    messagingSenderId: "211468117054",
    appId: "1:211468117054:web:8a7025ee855a5173535d6f",
    measurementId: "G-38Y9PWCQGG"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export default firebase;
