import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

function useGetTaskById(id) {
    const [task, setTask] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getTask = onSnapshot(
            doc(db, "tasks", id),
            (res) => {
                setTask(res.data());
            },
            (error) => setError(error)
        );
        return () => {
            getTask();
        };
    }, [id]);
    return { task, error };
}

export default useGetTaskById;
