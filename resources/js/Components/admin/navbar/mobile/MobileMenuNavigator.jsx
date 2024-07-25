import { Link } from "@inertiajs/inertia-react";
import {
    HiOutlineCog,
    HiOutlineUsers,
    HiOutlineViewGrid,
} from "react-icons/hi";

const side_navlinks = [
    { link: "/admin", id: 1, name: "Dashboard", icon: <HiOutlineViewGrid /> },
    {
        link: "/admin/customers",
        id: 2,
        name: "Customers",
        icon: <HiOutlineUsers />,
    },
    {
        link: "/admin/settings",
        id: 3,
        name: "Settings",
        icon: <HiOutlineCog />,
    },
];

const MobileMenuNavigator = ({ Nav, handleNav }) => {
    return (
        <div
            className={
                Nav
                    ? "lg:hidden absolute top-0 right-0 bottom-0 flex justify-start flex-col w-80 h-screen bg-BG_WHITE text-center pb-8 ease-in duration-300 border-l"
                    : "lg:hidden absolute top-0 right-[-100%] bottom-0 flex justify-start flex-col w-full h-screen bg-BG_WHITE text-center px-8 pb-8 ease-in duration-300"
            }
        >
            <div className="relative border-b border-MENU_BORDER py-0.5">
                <h1 className="ml-1.5 flex flex-1 mr-auto font-bold text-2xl py-3.5 px-3 text-TEXT_MAIN">
                    <Link href=""/* {route("admin.dashboard")} */ onClick={handleNav}>
                        Travelopia
                    </Link>
                </h1>
            </div>
            <div className="text-left">
                <ul>
                    {side_navlinks.map((navlink) => (
                        <li
                            key={navlink.id}
                            className="px-5 py-4 text-lg text-TEXT_MAIN font-medium hover:bg-MENU_HOVER"
                        >
                            <Link href={navlink.link} onClick={handleNav}>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">
                                        {navlink.icon}
                                    </span>
                                    {navlink.name}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MobileMenuNavigator;
