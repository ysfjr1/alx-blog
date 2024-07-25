import React from "react";
import { useField } from "formik";

const SelectInput = ({
    options,
    defaultLabel,
    label,
    displayKey,
    displayvalue,
    ...props
}) => {
    const [field, meta] = useField(props);
    return (
        <>
            {label != null ? (
                <label className="block mb-2 text-sm font-medium text-TEXT_MAIN">
                    {label}
                </label>
            ) : null}
            <select
                {...field}
                {...props}
                className={`w-full cursor-default bg-BG_WHITE border py-2 pl-2 pr-10 text-left focus:outline-none sm:text-sm rounded-md ${
                    meta.touched && meta.error
                        ? `border-FORM_ERROR_BORDER`
                        : `border-FORM_INPUT_BORDER`
                } `}
                value={field.value || ""}
            >
                <option value="">{defaultLabel}</option>
                {options.map((item, index) => (
                    <option
                        className="relative cursor-default select-none py-2 pl-10 pr-4"
                        key={index}
                        value={item[displayvalue]}
                    >
                        {item[displayKey]}
                    </option>
                ))}
            </select>
            {meta.touched && Boolean(meta.error) && (
                <p className="mt-2 text-sm text-TEXT_ERROR">{meta.error}</p>
            )}
        </>
    );
};

export default SelectInput;
