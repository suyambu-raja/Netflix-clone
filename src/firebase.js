import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth"
import {
    addDoc,
    collection,
    getFirestore
} from "firebase/firestore"
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyByFyWB5aexw8eGEIR44tg9jFTWYwRltak",
    authDomain: "netflix-clone-a0bea.firebaseapp.com",
    projectId: "netflix-clone-a0bea",
    storageBucket: "netflix-clone-a0bea.firebasestorage.app",
    messagingSenderId: "605458333695",
    appId: "1:605458333695:web:5cfabdb2c4f4b1c2c1b1ca",
    measurementId: "G-HKQLG93EJY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, eamil, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, eamil, password)
        const user = response.user
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    }
    catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout = () => {
    signOut(auth)
}


export { auth, db, login, signup, logout }