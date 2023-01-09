import React from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
function userRegistration() {
    const register = async (email, password, photo, displayName) => {
        try {
            // proses registrasi user
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            if (!res) throw new Error("Email already exist");
            // upload avatar
            const uploadPath = `images/${res.user.uid}/${photo.name}`;
            const refStorage = ref(storage, uploadPath);
            await uploadBytes(refStorage, photo);

            // update photo & displayName url pada user
            await getDownloadURL(refStorage)
                .then(async (url) => {
                    await updateProfile(res.user, {
                        photoURL: url,
                        displayName,
                    });
                })
                .catch((error) => console.log(error));
            console.log(res.user);

            // menambahkan data user ke firestore
        } catch (error) {
            if (error.code == "auth/email-already-in-use")
                return alert("Email already exists");
        }
    };
    return register;
}

export default userRegistration;
