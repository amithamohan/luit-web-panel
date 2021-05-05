import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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

export default firebase
