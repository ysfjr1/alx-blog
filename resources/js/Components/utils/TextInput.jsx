import { useField } from "formik";
import React from "react";

const TextInput = ({
    type = "text",
    placeholder,
    optional,
    label,
    detail,
    isSubmitting,
    ...props
}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label className="block mb-2 text-sm font-medium text-TEXT_MAIN">
                {label}{" "}
                {optional && (
                    <span className="text-TEXT_SEC text-xs font-medium">
                        (optional)
                    </span>
                )}
                {detail && (
                    <span className="mt-1 text-xs font-medium text-TEXT_SEC">
                        ({detail})
                    </span>
                )}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className={`bg-FORM_INPUT_BG border text-TEXT_MAIN text-sm block w-full p-2 focus:outline-none rounded-md ${
                    meta.touched && meta.error
                        ? `border-FORM_ERROR_BORDER`
                        : `border-FORM_INPUT_BORDER`
                } `}
                disabled={isSubmitting}
                {...field}
                {...props}
            />
            {meta.touched && Boolean(meta.error) && (
                <p className="mt-2 text-xs text-TEXT_ERROR">{meta.error}</p>
            )}
        </>
    );
};

export default TextInput;
