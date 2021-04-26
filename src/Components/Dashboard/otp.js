import firebase from 'firebase';


const config={
    
        apiKey: "AIzaSyCZoz1g6SyjEVoejC1fVje1RJ4TTDwGedQ",
        authDomain: "luit-web.firebaseapp.com",
        projectId: "luit-web",
        storageBucket: "luit-web.appspot.com",
        messagingSenderId: "866819669377",
        appId: "1:866819669377:web:03b59818e6c59c5ac9bc80",
        measurementId: "G-SPMLEB8Y5C"
     
};
firebase.initializeApp(config);
export default firebase;