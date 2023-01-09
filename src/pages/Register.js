import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import userRegistration from "../hooks/userRegistration";
const Register = () => {
    const register = userRegistration();
    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        photo: null,
    };

    const validationSchema = yup.object({
        name: yup.string().min(3).trim().required(),
        email: yup.string().min(3).trim().required().email(),
        password: yup.string().min(3).required(),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Password must match")
            .min(3)
            .required("Confirm password is a required field"),
        photo: yup.mixed().required(),
    });

    const onSubmit = async (values, props) => {
        const { email, password, photo, name } = values;
        await register(email, password, photo, name);
        props.setSubmitting(false);
    };
    return (
        <div className="grid place-items-center mt-10 w-full">
            <div className="p-5 border-[1px] border-gray-400 rounded-md w-4/12">
                <h1 className="font-bold text-3xl text-center text-blue-700">
                    Register
                </h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {(props) => {
                        return (
                            <Form className="mt-5 flex flex-col gap-4">
                                <div>
                                    <Field
                                        type="text"
                                        name="name"
                                        placeholder="Display Name"
                                        className="w-full input-auth"
                                    />
                                    <ErrorMessage name="name">
                                        {(error) => (
                                            <span className="error-message">
                                                {error}
                                            </span>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <div>
                                    <Field
                                        name="email"
                                        type="email"
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
                                        name="password"
                                        type="password"
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
                                <div>
                                    <Field
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Confirm Password"
                                        className="w-full input-auth"
                                    />
                                    <ErrorMessage name="confirmPassword">
                                        {(error) => (
                                            <span className="error-message">
                                                {error}
                                            </span>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <div>
                                    <h1 className="font-medium mb-2">
                                        Photo Profile
                                    </h1>
                                    <input
                                        name="photo"
                                        type="file"
                                        accept="image/png, image/jpg, image/jpeg"
                                        onChange={(e) =>
                                            props.setFieldValue(
                                                "photo",
                                                e.target.files[0]
                                            )
                                        }
                                    />
                                    <ErrorMessage name="photo">
                                        {(error) => (
                                            <span className="error-message block">
                                                {error}
                                            </span>
                                        )}
                                    </ErrorMessage>
                                </div>
                                <span>
                                    Sudah punya akun?{" "}
                                    <Link
                                        to={"/login"}
                                        className="text-blue-500"
                                    >
                                        Login
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
                                        : "Register"}
                                </button>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
};

export default Register;
