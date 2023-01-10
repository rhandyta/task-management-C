import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { toast } from "react-toastify";
import { auth } from "../firebase/config";

function useLogin() {
    const login = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                const { displayName, email, photoURL, uid } = res.user;
                const user = {
                    userId: uid,
                    displayName,
                    email,
                    photoURL,
                };
                toast.success("🦄 Login Successfully!", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
            .catch((error) => console.log(error.code));
    };
    return login;
}
export default useLogin;
