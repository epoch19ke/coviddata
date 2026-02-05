// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyDlWM9hfnreQMAXze5q5o2jr_Z9ekYxE2M",
    authDomain: "epoch19-479ca.firebaseapp.com",
    projectId: "epoch19-479ca",
    storageBucket: "epoch19-479ca.firebasestorage.app",
    messagingSenderId: "608813445980",
    appId: "1:608813445980:web:08ab4dedc8ddc71e670799",
    measurementId: "G-JKR6K20LSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export for use in other files
export { app, auth, db, storage };
