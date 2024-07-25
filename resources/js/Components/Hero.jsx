import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { HiChevronRight } from "react-icons/hi";

const Hero = ({ featuredblog, user }) => {
    const truncateDescription = (description, maxLength = 30) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + "...";
        }
        return description;
    };
    return (
        <section className="bg-gray-900">
            <div className="flex items-center justify-end mx-10 pt-5">
                {!user ? (
                    <Link
                        href={route("login")}
                        className="text-sm text-white hover:underline"
                    >
                        Login
                    </Link>
                ) : (
                    <Link
                        href={route("admin.dashboard")}
                        className="text-sm text-white hover:underline"
                    >
                        Dashboard
                    </Link>
                )}
            </div>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                {featuredblog ? (
                    <Link
                        href={route("blog", featuredblog.slug)}
                        className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm rounded-full bg-gray-800 text-white hover:bg-gray-700"
                    >
                        <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
                            New
                        </span>{" "}
                        <span className="text-sm font-medium">
                            {truncateDescription(featuredblog.description, 30)}
                        </span>
                        <HiChevronRight />
                    </Link>
                ) : null}
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
                    My Blog
                </h1>
                <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-400">
                    View My latest Blogs Built by Laravel and react with
                    tailwindcss.
                </p>
            </div>
        </section>
    );
};

export default Hero;
