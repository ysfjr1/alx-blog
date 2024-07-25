import React from "react";
import { Link } from "@inertiajs/inertia-react";
import AdminBase from "../../../Layouts/AdminBase";
import { Inertia } from "@inertiajs/inertia";
import { Form, Formik } from "formik";
import MainDetails from "../../../Components/admin/blog/MainDetails";
import Formheader from "../../../Components/FormHeader";

const Edit = ({ blog }) => {
    const initialValues = {
        title: blog.title,
        description: blog.description,
        image: blog.image,
    };

    function onSubmit(values, { resetForm, setErrors, setSubmitting }) {
        Inertia.put(route("admin.blogs.update", blog.id), values, {
            onError: (errors) => {
                if (errors && typeof errors === "object") {
                    const formattedErrors = {};

                    for (const [key, message] of Object.entries(errors)) {
                        formattedErrors[key] = message;
                    }

                    setErrors(formattedErrors);
                }
                setSubmitting(false);
            },
            onSuccess: () => {
                resetForm();
                setSubmitting(false);
            },
        });
    }

    return (
        <div className="sm:px-4">
            <Formik
                enableReinitialize
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {({
                    values,
                    isSubmitting,
                    resetForm,
                    setErrors,
                    setSubmitting,
                    dirty,
                }) => (
                    <Form>
                        {/* HEADING SECTION */}
                        <Formheader
                            title="Blogs"
                            value={values.title}
                            link={route("admin.dashboard")}
                        />

                        <div>
                            <MainDetails
                                isSubmitting={isSubmitting}
                                dirty={!dirty}
                                values={values}
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Edit;
Edit.layout = (page) => <AdminBase children={page} title={"New Blog"} />;
