import { Fragment } from "react";
import {
    HiOutlineChevronDown,
    HiOutlineViewGrid,
} from "react-icons/hi";
import { Transition, Popover } from "@headlessui/react";
import { Link } from "@inertiajs/inertia-react";

const navlinks = [
    {
        link: route('home'),
        id: 1,
        name: "Home",
        icon: <HiOutlineViewGrid />,
    },
];

const DesktopMenu = () => {
    return (
        <ul className="hidden lg:flex">
            {navlinks.map((navlink) => (
                <li className="p-4 font-medium text-base" key={navlink.id}>
                    <Popover className="relative">
                        {({ close }) => (
                            <>
                                <Popover.Button
                                    className="
                group inline-flex items-center px-2 text-sm xl:text-base font-medium text-TEXT_MAIN focus:outline-none hover:text-opacity-100"
                                >
                                    {navlink.children ? (
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg">
                                                {navlink.icon}
                                            </span>
                                            <span>{navlink.name}</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg">
                                                {navlink.icon}
                                            </span>
                                            <Link href={navlink.link}>
                                                {navlink.name}
                                            </Link>
                                        </div>
                                    )}
                                    {navlink.children && (
                                        <HiOutlineChevronDown
                                            aria-hidden="true"
                                            className="ml-1.5"
                                        />
                                    )}
                                </Popover.Button>
                                {navlink.children && (
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel
                                            className="absolute left-1/2 z-10 mt-4 w-44 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"
                                            static
                                            focus
                                        >
                                            <div className="overflow-hidden rounded-b-md shadow-sm border">
                                                <div className="relative grid gap-6 bg-BG_WHITE px-2 py-4">
                                                    {navlink.children.map(
                                                        (item) => (
                                                            <Link
                                                                onClick={() =>
                                                                    close()
                                                                }
                                                                key={item.name}
                                                                href={item.link}
                                                                className="-m-3 flex items-center rounded-md transition duration-150 ease-in-out hover:bg-MENU_HOVER focus:outline-none px-4 py-2"
                                                            >
                                                                <span className="text-xl">
                                                                    {item.icon}
                                                                </span>
                                                                <p className="text-base font-medium text-TEXT_MAIN ml-3">
                                                                    {item.name}
                                                                </p>
                                                            </Link>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                )}
                            </>
                        )}
                    </Popover>
                </li>
            ))}
        </ul>
    );
};

export default DesktopMenu;
