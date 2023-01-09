import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDImjn2gMXP88tkNamQVYTvjwC3dZ9xg1U",
    authDomain: "my-task-7df75.firebaseapp.com",
    projectId: "my-task-7df75",
    storageBucket: "my-task-7df75.appspot.com",
    messagingSenderId: "276600237754",
    appId: "1:276600237754:web:31a00801c4006f3ac11c83",
    measurementId: "G-KFM099PF1E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
