import { Link, Head } from "@inertiajs/inertia-react";
import React from "react";
import { Form, Formik } from "formik";
import { Inertia } from "@inertiajs/inertia";
import TextInput from "../../Components/utils/TextInput";
import PrimaryBtn from "../../Components/utils/PrimaryBtn";

const Login = () => {
    const initialValues = {
        email: "",
        password: "",
    };

    function onSubmit(values, { setErrors, setSubmitting }) {
        Inertia.post(route("login.store"), values, {
            onError: (errors) => {
                if (errors && typeof errors === "object") {
                    const formattedErrors = {};
                    Object.entries(errors).forEach(([key, message]) => {
                        formattedErrors[key] = message;
                    });

                    setErrors(formattedErrors);
                }
                setSubmitting(false);
            },
        });
    }

    return (
        <section className="bg-BG_WHITE my-20 overflow-scroll sm:overflow-hidden">
            <Head title="Log in" />
            <div className="flex flex-col items-center justify-center gap-6">
                <Link href="/">
                    <h1>LOGO HERE</h1>
                </Link>
                <div className="w-full bg-BG_WHITE rounded-md shadow border max-w-xs sm:max-w-xl xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-TEXT_MAIN md:text-2xl text-center">
                            Login to your account
                        </h1>
                        <Formik
                            enableReinitialize
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                        >
                            {({
                                values,
                                setFieldValue,
                                errors,
                                touched,
                                setErrors,
                                setSubmitting,
                                isSubmitting,
                                dirty,
                            }) => (
                                <Form className="space-y-4 md:space-y-5">
                                    {/*EMAIL SECTION */}
                                    <div>
                                        <div>
                                            <TextInput
                                                name="email"
                                                label="Email"
                                                type="email"
                                            />
                                        </div>
                                    </div>

                                    {/* PASSWORD SECTION */}
                                    <div>
                                        <div>
                                            <TextInput
                                                name="password"
                                                label="Password"
                                                type="password"
                                            />
                                        </div>
                                    </div>

                                    {/* BUTTON SECTION */}
                                    <div className="pt-2">
                                        <PrimaryBtn
                                            type="submit"
                                            value="Sign in"
                                            isSubmitting={isSubmitting}
                                            dirty={!dirty}
                                        />
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
