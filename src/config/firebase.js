import firebase from "firebase/app";
import "firebase/analytics";

var firebaseConfig =
{
	apiKey: "AIzaSyDoTSS-4AJq1zx-44RfdzPY_R7eARMrNeM",
	authDomain: "styleade.firebaseapp.com",
	databaseURL: "https://styleade.firebaseio.com",
	projectId: "luit-ec7a3",
	storageBucket: "styleade.appspot.com",
	messagingSenderId: "32465567518",
	appId: "1:1043266914152:android:adf870606f7e21718c38dd",
	measurementId: "G-12EJHC2CC4"
};

const firebaseClient = firebase.initializeApp(firebaseConfig);
const firebaseAnalyticsClient = firebase.analytics();

// firebaseAnalyticsClient.logEvent("page_view");

export default firebaseClient;