import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
function useGetUsers() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const unsub = onSnapshot(
            query(collection(db, "users"), orderBy("displayName")),
            (snapshot) => {
                let tempUsers = [];
                snapshot.docs.forEach((user) => {
                    tempUsers.push({ id: user.id, ...user.data() });
                });
                setUsers(tempUsers);
            },
            (error) => setError(error)
        );
        return () => {
            unsub();
        };
    }, []);
    return { users, error };
}

export default useGetUsers;
