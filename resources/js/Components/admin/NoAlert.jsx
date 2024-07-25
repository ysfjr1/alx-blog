import React from "react";
import { HiOutlineExclamation } from "react-icons/hi";

const NoAlert = ({ message, border_b }) => {
    return (
        <div
            className={`flex p-4 text-sm text-yellow-700 ${
                border_b != false && `border-b `
            } bg-yellow-50 justify-center`}
        >
            <HiOutlineExclamation size={20} className="mr-2" />
            <div className="text-sm font-semibold">{message}</div>
        </div>
    );
};

export default NoAlert;
