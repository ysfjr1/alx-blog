import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const Paginator = ({ links, from, to, total, prev, next }) => {
    return (
        <>
            <nav className="sm:flex justify-between items-center py-3 px-4">
                {links.length > 3 && (
                    <>
                        <span className="text-sm font-normal text-gray-500 sm:py-0 py-2 block text-center sm:text-left">
                            Showing
                            <span className="font-semibold text-gray-800 mx-1">
                                {from}-{to}
                            </span>
                            of{" "}
                            <span className="font-semibold text-gray-800 ">
                                {total}
                            </span>
                        </span>
                        <ul className="hidden md:inline-flex items-center -space-x-px">
                            {links.length <= 10 ? (
                                <>
                                    {links.map((l, index) => (
                                        <li key={l.label}>
                                            {l.url === null ? (
                                                <span
                                                    className={`${
                                                        index === 0 &&
                                                        `rounded-l-md`
                                                    } ${
                                                        index ===
                                                            links.length - 1 &&
                                                        `rounded-r-md`
                                                    } block py-1.5 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:cursor-pointer ${
                                                        l.active &&
                                                        `bg-gray-200`
                                                    }`}
                                                >
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: l.label,
                                                        }}
                                                    />
                                                </span>
                                            ) : (
                                                <Link
                                                    href={l.url}
                                                    className={`${
                                                        index === 0 &&
                                                        `rounded-l-md`
                                                    } ${
                                                        index ===
                                                            links.length - 1 &&
                                                        `rounded-r-md`
                                                    } block py-1.5 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer ${
                                                        l.active &&
                                                        `bg-gray-200`
                                                    }`}
                                                >
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: l.label,
                                                        }}
                                                    />
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <li>
                                        {prev === null ? (
                                            <span className="py-1.5 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:cursor-pointer rounded-l-md flex items-center justify-center">
                                                <HiOutlineChevronLeft
                                                    size={21}
                                                />
                                                <span>Previous</span>
                                            </span>
                                        ) : (
                                            <Link
                                                href={prev}
                                                className="flex py-1.5 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer rounded-l-md items-center justify-center"
                                            >
                                                <HiOutlineChevronLeft
                                                    size={21}
                                                />
                                                <span>Previous</span>
                                            </Link>
                                        )}
                                    </li>
                                    <li>
                                        {next === null ? (
                                            <span className="py-1.5 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:cursor-pointer rounded-r-md flex items-center justify-center">
                                                <HiOutlineChevronRight
                                                    size={21}
                                                />
                                                <span>Next</span>
                                            </span>
                                        ) : (
                                            <Link
                                                href={next}
                                                className="flex py-1.5 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer rounded-r-md items-center justify-center"
                                            >
                                                <span>Next</span>
                                                <HiOutlineChevronRight
                                                    size={21}
                                                />
                                            </Link>
                                        )}
                                    </li>
                                </>
                            )}
                        </ul>
                        <ul className="md:hidden flex items-center -space-x-px justify-center">
                            <li>
                                {prev === null ? (
                                    <span className="py-1.5 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:cursor-pointer rounded-l-md flex items-center justify-center">
                                        <HiOutlineChevronLeft size={21} />
                                        <span>Previous</span>
                                    </span>
                                ) : (
                                    <Link
                                        href={prev}
                                        className="flex py-1.5 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer rounded-l-md items-center justify-center"
                                    >
                                        <HiOutlineChevronLeft size={21} />
                                        <span>Previous</span>
                                    </Link>
                                )}
                            </li>
                            <li>
                                {next === null ? (
                                    <span className="py-1.5 px-3 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:cursor-pointer rounded-r-md flex items-center justify-center">
                                        <HiOutlineChevronRight size={21} />
                                        <span>Next</span>
                                    </span>
                                ) : (
                                    <Link
                                        href={next}
                                        className="flex py-1.5 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 hover:cursor-pointer rounded-r-md items-center justify-center"
                                    >
                                        <span>Next</span>
                                        <HiOutlineChevronRight size={21} />
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </>
                )}
            </nav>
        </>
    );
};

export default Paginator;
