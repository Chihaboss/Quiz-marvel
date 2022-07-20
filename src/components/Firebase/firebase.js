import app from 'firebase/app';
import 'firebase/auth';

const Config = {
    apiKey: "AIzaSyBedkut9h4hNqNw5u0-LneQJbH16fvPXgU",
    authDomain: "marvel-quiz-c6afa.firebaseapp.com",
    projectId: "marvel-quiz-c6afa",
    storageBucket: "marvel-quiz-c6afa.appspot.com",
    messagingSenderId: "340832623805",
    appId: "1:340832623805:web:06d3fcd90093f335e8abd4"
  };


class Firebase {
    constructor() {
        app.initializeApp(Config);
        this.auth = app.auth();
    }

    // inscription

    signupUser = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);

    // connexion

    loginUser = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    // deconnexion

    signoutUser = () => this.auth.signOut();
    



}

export default Firebase;