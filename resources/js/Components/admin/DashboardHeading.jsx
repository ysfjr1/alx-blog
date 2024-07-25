import { Link } from "@inertiajs/inertia-react";
import React from "react";

const DashboardHeading = ({ title, subtitle, link, btn_title, onClick }) => {
    return (
        <div className="flex items-center justify-between px-1">
            <div>
                <span className="block font-semibold text-xl text-TEXT_MAIN">
                    {title}
                </span>
                <span className="font-medium text-sm text-TEXT_SEC">
                    {subtitle}
                </span>
            </div>
            <div className="flex items-center">
                {link ? (
                    <Link
                        href={link}
                        className="text-sm font-medium bg-BTN_DARK text-TEXT_WHITE px-3 py-2 rounded-md shadow-sm shadow-gray-100 hover:bg-gray-700"
                    >
                        {btn_title}
                    </Link>
                ) : (
                    <button
                        onClick={onClick}
                        className="text-sm font-medium bg-BTN_DARK text-TEXT_WHITE px-3 py-2 rounded-md shadow-sm shadow-gray-100 hover:bg-gray-700"
                    >
                        {btn_title}
                    </button>
                )}
            </div>
        </div>
    );
};

export default DashboardHeading;
