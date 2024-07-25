import { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import MobileMenuButton from "./mobile/MobileMenuButton";
import MobileMenuNavigator from "./mobile/MobileMenuNavigator";
import DesktopMenu from "./desktop/DesktopMenu";
import UserMenuButton from "./desktop/UserMenuButton";
// import logo from "../../../../assets/logo.png";

const Navbar = () => {
    const [Nav, SetNav] = useState(false);
    const handleNav = () => {
        SetNav(!Nav);
    };

    return (
        <div className="bg-BG_WHITE px-4 border-b border-BORDER_MAIN z-50 sticky top-0">
            <div className="flex items-center justify-between m-auto px-4 py-[9px] lg:py-0 text-TEXT_MAIN">
                <h1 className="font-bold text-2xl text-TEXT_MAIN">
                    <Link href={route("admin.dashboard")}>
                        <h1>LOGO HERE</h1>
                    </Link>
                </h1>

                {/* DESKTOP MENU SECTION */}
                <DesktopMenu />

                <ul className="items-center gap-5 hidden lg:flex text-TEXT_MAIN">
                    {/* USER MENU BUTTON */}
                    <UserMenuButton />
                </ul>

                {/* MOBILE MENU BUTTON */}
                <MobileMenuButton Nav={Nav} handleNav={handleNav} />

                {/* MOBILE NAVIGATION */}
                <MobileMenuNavigator Nav={Nav} handleNav={handleNav} />
            </div>
        </div>
    );
};

export default Navbar;
