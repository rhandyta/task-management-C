import {
    CalendarIcon,
    CheckIcon,
    ExclamationTriangleIcon,
    PaperAirplaneIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Spinner from "../component/Spinner";
import useGetTaskById from "../hooks/useGetTaskById";
import useCompare from "../hooks/useCompare";
import { useSelector } from "react-redux";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const DetailTask = () => {
    const auth = useSelector((state) => state.user);
    const navigate = useNavigate();
    const { id } = useParams();
    const { task, error } = useGetTaskById(id);
    const { isCompleted, isInWork, isDueDate } = useCompare();
    const myTask = task?.users.some((user) => user.id == auth.userId);

    const [comment, setComment] = useState({
        id: auth.userId,
        displayName: auth.displayName,
        photoURL: auth.photoURL,
        body: "",
    });

    const handlerMarkAsCompleted = async () => {
        await updateDoc(doc(db, "tasks", id), {
            completed: true,
        });
    };

    const deleteTask = async () => {
        if (window.confirm("Are u sure?")) {
            await deleteDoc(doc(db, "tasks", id));
            return navigate(-1);
        }
        return false;
    };

    const handleComment = (e) => {
        setComment({ ...comment, body: e.target.value });
    };

    const handleSubmitComment = async (e) => {
        e.preventDefault();
        await updateDoc(doc(db, "tasks", id), {
            comments: [...task.comments, comment],
        });
        setComment({ ...comment, body: "" });
    };

    return !task ? (
        <div className="flex justify-center h-full items-center">
            <Spinner className="mr-40" />
        </div>
    ) : (
        <div className="flex">
            <div className="basis-8/12">
                <div className="border-[1px] rounded-md p-4">
                    <h1 className="text-xl font-medium mb-3">{task.title}</h1>
                    <div className="text-gray-500 flex gap-2 mb-3 items-center">
                        <CalendarIcon width="20" />
                        <span>{new Date(task.duedate).toDateString()}</span>
                        {isDueDate(task) && (
                            <label className="bg-red-100 px-3 py-1 rounded-full font-medium text-red-500 text-sm">
                                Due Date
                            </label>
                        )}
                    </div>
                    <p className="text-justify text-gray-700 mb-5">
                        {task.description}
                    </p>
                    {myTask && (
                        <div className="flex gap-3">
                            {isInWork(task) && (
                                <button
                                    className="bg-green-600 hover:bg-green-700 btn"
                                    onClick={handlerMarkAsCompleted}
                                >
                                    Mark As Completed
                                </button>
                            )}
                            {isCompleted(task) && (
                                <div className="flex items-center">
                                    <CheckIcon
                                        width="25"
                                        className="text-green-400"
                                    />
                                    <span className="block ml-1 text-green-400">
                                        Completed
                                    </span>
                                </div>
                            )}
                            {isDueDate(task) && (
                                <div className="flex items-center">
                                    <ExclamationTriangleIcon
                                        width="25"
                                        className="text-red-400"
                                    />
                                    <span className="block ml-1 text-red-400">
                                        Due Date
                                    </span>
                                </div>
                            )}
                            <button
                                className="bg-red-600 hover:bg-red-700 btn"
                                onClick={deleteTask}
                            >
                                <TrashIcon width="20" />
                            </button>
                        </div>
                    )}
                </div>
                {/* Comment */}
                <div className="p-4 mt-4 border-[1px] rounded-md">
                    <h1 className="text-xl font-medium mb-3">Comments</h1>
                    <div className="mb-4">
                        {task.comments.map((comment, index) => (
                            <div className="mb-3 w-fit flex gap-1" key={index}>
                                <img
                                    src={comment.photoURL}
                                    alt="avatar-user"
                                    className="avatar mr-1 self-start"
                                />
                                <div className="bg-gray-100 p-1 px-4 rounded-lg">
                                    <h1 className="font-medium">
                                        {comment.displayName}
                                    </h1>
                                    <p className="text-sm">{comment.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {myTask && (
                        <form
                            className="flex gap-2"
                            onSubmit={handleSubmitComment}
                        >
                            <textarea
                                type="text"
                                className="basis-10/12 outline-none border-[1px] rounded-lg p-2"
                                onChange={handleComment}
                                value={comment.body}
                            />
                            <button
                                type="submit"
                                className="btn self-start bg-blue-700 hover:bg-blue-800"
                            >
                                <PaperAirplaneIcon width="20" />
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <div className="basis-4/12 px-3">
                <div className="border-[1px] rounded-md p-3">
                    <h1 className="text-xl font-medium mb-3">Users</h1>
                    <div>
                        {task.users.map((user) => (
                            <div
                                className="text-sm py-1 text-gray-500 flex items-center"
                                key={user.id}
                            >
                                <img
                                    src={user.photoURL}
                                    alt="avatar-user"
                                    className="avatar mr-2"
                                />
                                <h1>{user.displayName}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailTask;
