import React from "react";

function useCompare() {
    const taskAtWork = (task) =>
        new Date().getTime() < new Date(task.duedate).getTime() &&
        !task.completed;
    return { taskAtWork };
}

export default useCompare;
