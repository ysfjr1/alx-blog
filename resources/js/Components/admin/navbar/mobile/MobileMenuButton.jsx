import { Fragment } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiOutlineLogout, HiUser } from "react-icons/hi";
import { Transition, Popover } from "@headlessui/react";
import { Link } from "@inertiajs/inertia-react";

const MobileMenuButton = ({ Nav, handleNav }) => {
    return (
        <div className="lg:hidden flex items-center">
            <ul className="items-center gap-5 text-TEXT_MAIN flex px-5">
                <li>
                    <Popover className="relative">
                        {({ open, close }) => (
                            <>
                                <Popover.Button
                                    className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center px-2 text-sm xl:text-base font-medium text-TEXT_MAIN focus:outline-none hover:text-opacity-100`}
                                >
                                    <span className="sr-only">
                                        Open user menu
                                    </span>
                                    <div>
                                        <img
                                            src="https://img.freepik.com/free-photo/sexy-blonde-woman-model-with-makeup-cheekbones-healthy-shiny-skin_8353-6157.jpg?w=740&t=st=1691071369~exp=1691071969~hmac=4276724a34f98ccade9b480c29e0380e9550d100b8d37ae9e7ebd26d6c296488"
                                            alt="alt"
                                            className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center border border-gray-300"
                                        />
                                        <span className="sr-only">
                                            Hugh Jackson
                                        </span>
                                    </div>
                                </Popover.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="origin-top-right z-10 absolute right-0 mt-2.5 w-48 rounded-b-md shadow-md bg-BG_WHITE ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="overflow-hidden rounded-b-md">
                                            <div className="relative grid gap-6 bg-BG_WHITE px-2 py-4">
                                                <Link
                                                    href=/* {route(
                                                        "admin.profile"
                                                    )} */""
                                                    onClick={() => close()}
                                                    className="-m-3 flex items-center rounded-md transition duration-150 ease-in-out hover:bg-MENU_HOVER focus:outline-none px-4 py-2"
                                                >
                                                    <span className="text-xl">
                                                        <HiUser />
                                                    </span>
                                                    <span className="text-base font-medium text-TEXT_MAIN ml-3">
                                                        My Profile
                                                    </span>
                                                </Link>
                                                <Link
                                                    href={route("logout")}
                                                    method="post"
                                                    as="button"
                                                    className="-m-3 flex items-center rounded-md transition duration-150 ease-in-out hover:bg-MENU_HOVER focus:outline-none px-4 py-2"
                                                    onClick={() => close()}
                                                >
                                                    <span className="text-xl">
                                                        <HiOutlineLogout />
                                                    </span>
                                                    <span className="text-base font-medium text-TEXT_MAIN ml-3">
                                                        Log out
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                </li>
            </ul>
            <div className="z-10">
                {Nav ? (
                    <AiOutlineClose
                        size={25}
                        onClick={handleNav}
                        className="hover:cursor-pointer"
                    />
                ) : (
                    <AiOutlineMenu
                        size={25}
                        onClick={handleNav}
                        className="hover:cursor-pointer"
                    />
                )}
            </div>
        </div>
    );
};

export default MobileMenuButton;
