import React from "react";
import Spinner from "../Spinner";

const PrimaryBtn = ({ type, value, onClick, isSubmitting, dirty }) => {
    return (
        <div>
            <button
                type={type}
                className={`text-TEXT_WHITE bg-BTN_DARK hover:bg-BTN_DARK_HOVER font-medium rounded-md text-sm w-full px-5 py-2 text-center ${
                    isSubmitting &&
                    `flex items-center justify-center gap-1 opacity-50`
                } disabled:cursor-not-allowed disabled:opacity-50`}
                onClick={onClick}
                disabled={isSubmitting || dirty}
            >
                {isSubmitting ? <Spinner /> : value}
            </button>
        </div>
    );
};

export default PrimaryBtn;
