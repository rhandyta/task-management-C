import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { ToastContainer } from "react-toastify";

const Login = () => {
    const login = useLogin();
    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = yup.object({
        email: yup.string().min(3).trim().required().email(),
        password: yup.string().min(3).required(),
    });

    const onSubmit = async (values, props) => {
        await login(values.email, values.password);
        await props.setSubmitting(false);
    };
    return (
        <div className="grid place-items-center mt-32 w-full">
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
            <div className="p-5 border-[1px] border-gray-400 rounded-md w-4/12">
                <h1 className="font-bold text-3xl text-center text-blue-700">
                    Login
                </h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {(props) => {
                        return (
                            <Form className="mt-5 flex flex-col gap-4">
                                <div>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="w-full input-auth"
                                    />
                                    <ErrorMessage name="email">
                                        {(error) => (
                                            <span className="error-message">
                                                {error}
                                            </span>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <div>
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="w-full input-auth"
                                    />
                                    <ErrorMessage name="password">
                                        {(error) => (
                                            <span className="error-message">
                                                {error}
                                            </span>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <span>
                                    Belum punya akun?{" "}
                                    <Link
                                        to={"/register"}
                                        className="text-blue-500"
                                    >
                                        Register
                                    </Link>
                                </span>
                                <button
                                    className="btn bg-blue-700"
                                    type="submit"
                                    disabled={
                                        !props.isValid ||
                                        props.isSubmitting ||
                                        !props.dirty
                                    }
                                >
                                    {props.isSubmitting
                                        ? "Please Wait"
                                        : "Login"}
                                </button>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
};

export default Login;
