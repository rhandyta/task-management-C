import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
function userRegistration() {
    const register = async (email, password) => {
        // proses registrasi user
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log(res.user);
        // upload avatar

        // update photo & displayName url pada user

        // menambahkan data user ke firestore
    };
    return register;
}

export default userRegistration;
