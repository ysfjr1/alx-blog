import React from "react";

const DashboardCard = ({children}) => {
    return (
        <div className="block max-w-sm py-6 px-5 bg-BG_WHITE border border-BORDER_MAIN rounded-md">
            {children}
        </div>
    );
};

export default DashboardCard;
