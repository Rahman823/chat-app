import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyD3IUx0Kh5MD3152YbBaelLU6r-uGTQ69g",
  authDomain: "chat-web-app-f7198.firebaseapp.com",
  projectId: "chat-web-app-f7198",
  storageBucket: "chat-web-app-f7198.appspot.com",
  messagingSenderId: "392974566869",
  appId: "1:392974566869:web:6143636ec5e98e81f1e95c"
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();