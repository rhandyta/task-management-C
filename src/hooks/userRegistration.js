import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage } from "../firebase/config";
import { ref, uploadBytes } from "firebase/storage";
function userRegistration() {
    const register = async (email, password, photo) => {
        // proses registrasi user
        const res = await createUserWithEmailAndPassword(auth, email, password);
        if (!res) throw new Error("Email already exist");
        // upload avatar
        const uploadPath = `images/${res.user.uid}/${photo.name}`;
        const refStorage = ref(storage, uploadPath);
        await uploadBytes(refStorage, photo);
        console.log(res.user);

        // update photo & displayName url pada user

        // menambahkan data user ke firestore
    };
    return register;
}

export default userRegistration;
