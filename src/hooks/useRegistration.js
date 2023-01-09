import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function useRegistration() {
    const navigate = useNavigate();
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

            // menambahkan data user ke firestore
            await setDoc(doc(db, "users", res.user.uid), {
                online: false,
                displayName: res.user.displayName,
                photoURL: res.user.photoURL,
                email: res.user.email,
            });
            toast.success("🦄 Registraion Successfully!", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setTimeout(() => {
                navigate("/login");
            }, 3000);
        } catch (error) {
            if (error.code == "auth/email-already-in-use")
                return alert("Email already exists");
        }
    };
    return register;
}

export default useRegistration;
