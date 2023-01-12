import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";

function useGetTasks() {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const unsub = onSnapshot(
            query(collection(db, "tasks"), orderBy("timestamp", "desc")),
            (snapshot) => {
                let tempTasks = [];
                snapshot.docs.forEach((tasks) => {
                    tempTasks.push({ id: tasks.id, ...tasks.data() });
                });
                setTasks(tempTasks);
            },
            (error) => setError(error)
        );
        return () => {
            unsub();
        };
    }, []);
    return { tasks, error };
}

export default useGetTasks;
