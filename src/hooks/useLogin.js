import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { userLogin } from "../features/userSlice";
import { auth, db } from "../firebase/config";

function useLogin() {
    const dispatch = useDispatch();
    const login = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
            .then(async (res) => {
                const { displayName, email, photoURL, uid } = res.user;
                const user = {
                    userId: uid,
                    displayName,
                    email,
                    photoURL,
                };

                const userRef = doc(db, "users", user.userId);
                await updateDoc(userRef, {
                    online: true,
                });

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

                dispatch(userLogin(user));
            })
            .catch((error) => {
                if (error.code == "auth/user-not-found") {
                    toast.error("🦄 Something went wrong!", {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            });
    };
    return login;
}
export default useLogin;
