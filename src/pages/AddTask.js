import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import useGetUsers from "../hooks/useGetUsers";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
    const { users, error } = useGetUsers();
    const navigate = useNavigate();
    const [optionUsers, setOptionUsers] = useState([]);
    const categories = [
        { value: "UI DESIGNER", label: "UI DESIGNER" },
        { value: "UX DESIGNER", label: "UX DESIGNER" },
        { value: "FRONT END", label: "FRONT END" },
        { value: "BACK END", label: "BACK END" },
    ];
    const initialValues = {
        title: "",
        description: "",
        duedate: "",
        categories: "",
        users: [],
    };
    const validationSchema = yup.object({
        title: yup.string().required(),
        description: yup.string().required(),
        duedate: yup.string().required(),
        categories: yup.string().required().min(1),
        users: yup.array().required().min(1),
    });

    useEffect(() => {
        if (users) {
            const options = users.map((user) => ({
                value: user,
                label: user.displayName,
            }));
            setOptionUsers(options);
        }
    }, [users]);

    const onSubmit = async (values, props) => {
        await addDoc(collection(db, "tasks"), {
            title: values.title,
            description: values.description,
            duedate: values.duedate,
            categories: values.categories,
            users: values.users,
            completed: false,
            comments: [],
            timestamp: serverTimestamp(),
        })
            .then(() => {
                toast.success("🦄 Added task successfully!", {
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
                    navigate("/my-task");
                }, 3000);
            })
            .catch((error) => {
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
            });
    };
    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="colored"
            />
            <h1 className="text-2xl font-medium">Add Task</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {(props) => (
                    <Form className="py-3">
                        <div className="mb-3 flex flex-col">
                            <label className="mb-2 font-medium" htmlFor="title">
                                Title
                            </label>
                            <Field
                                id="title"
                                type="text"
                                name="title"
                                placeholder="Title"
                                className="input-text"
                            />
                            <ErrorMessage name="title">
                                {(error) => (
                                    <span className="error-message">
                                        {error}
                                    </span>
                                )}
                            </ErrorMessage>
                        </div>
                        <div className="mb-3 flex flex-col">
                            <label
                                className="mb-2 font-medium"
                                htmlFor="description"
                            >
                                Description
                            </label>
                            <Field
                                as="textarea"
                                id="description"
                                type="text"
                                name="description"
                                placeholder="Description"
                                className="input-text"
                            />
                            <ErrorMessage name="description">
                                {(error) => (
                                    <span className="error-message">
                                        {error}
                                    </span>
                                )}
                            </ErrorMessage>
                        </div>
                        <div className="mb-3 flex flex-col">
                            <label
                                htmlFor="duedate"
                                className="mb-2 font-medium"
                            >
                                Set Due Date
                            </label>
                            <Field
                                id="duedate"
                                type="date"
                                name="duedate"
                                className="outline-none border-[1px] self-start py-1 px-2 rounded-md"
                            />
                            <ErrorMessage name="duedate">
                                {(error) => (
                                    <span className="error-message">
                                        {error}
                                    </span>
                                )}
                            </ErrorMessage>
                        </div>
                        <div className="mb-3 flex flex-col">
                            <label htmlFor="users" className="mb-2 font-medium">
                                Users
                            </label>
                            <Select
                                isMulti
                                name="users"
                                id="users"
                                options={optionUsers}
                                onChange={(e) => {
                                    const value = e.map((user) => user.value);
                                    props.setFieldValue("users", value);
                                }}
                            />
                            <ErrorMessage name="users">
                                {(error) => (
                                    <span className="error-message">
                                        {error}
                                    </span>
                                )}
                            </ErrorMessage>
                        </div>
                        <div className="mb-3 flex flex-col">
                            <label
                                htmlFor="category"
                                className="mb-2 font-medium"
                            >
                                Category
                            </label>
                            <Select
                                id="category"
                                name="categories"
                                options={categories}
                                onChange={(e) =>
                                    props.setFieldValue("categories", e.value)
                                }
                            />
                            <ErrorMessage name="categories">
                                {(error) => (
                                    <span className="error-message">
                                        {error}
                                    </span>
                                )}
                            </ErrorMessage>
                        </div>
                        <button
                            className="btn bg-blue-700"
                            type="submit"
                            disabled={
                                !props.isValid ||
                                props.isSubmitting ||
                                !props.dirty
                            }
                        >
                            {props.isSubmitting ? "Please Wait" : "Add Task"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddTask;
