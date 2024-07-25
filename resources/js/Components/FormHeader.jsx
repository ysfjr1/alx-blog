import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const FormHeader = ({title, value, link}) => {
    return (
        <div className="mb-4">
            <div className="font-semibold text-xl text-TEXT_MAIN flex items-center gap-2">
                <Link
                    href={link}
                    className="border py-1 px-1 border-gray-500 rounded-md hover:cursor-pointer"
                >
                    <HiOutlineArrowSmLeft className="text-TEXT_THIRD" />
                </Link>
                {title} / {value}
            </div>
        </div>
    );
};

export default FormHeader;
