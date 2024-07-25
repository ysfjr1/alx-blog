import React from "react";
import { useField, useFormikContext } from "formik";

const CheckboxInput = ({ name, label, ...props }) => {
    const [field, meta, helpers] = useField({ name, type: "checkbox" });

    const { setFieldValue } = useFormikContext();

    const handleChange = (event) => {
        const { checked } = event.target;
        setFieldValue(name, checked);
    };

    return (
        <div>
            <div className="flex items-center">
                <input
                    id={name}
                    type="checkbox"
                    {...field}
                    {...props}
                    checked={field.value}
                    onChange={handleChange}
                    className={`w-4 h-4 text-TEXT_THIRD bg-gray-100 rounded border-BORDER_MAIN ${
                        meta.touched && meta.error
                            ? `border-FORM_ERROR_BORDER`
                            : `border-BORDER_MAIN`
                    }`}
                />
                <label htmlFor={name} className="ml-2 text-sm text-TEXT_MAIN">{label}</label>
            </div>
            {meta.touched && Boolean(meta.error) && (
                <p className="mt-2 text-xs text-TEXT_ERROR">{meta.error}</p>
            )}
        </div>
    );
};

export default CheckboxInput;
