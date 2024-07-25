import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { HiOutlineChevronRight, HiOutlineNewspaper } from "react-icons/hi";
import { formatDistanceToNow } from "date-fns";
import Paginator from "./Paginator";

const Blogs = ({ blogs }) => {
    const truncateDescription = (description, maxLength = 30) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + "...";
        }
        return description;
    };
    return (
        <div className="px-32 py-20">
            <div className="grid gap-8 lg:grid-cols-2">
                {blogs.data.map((b, index) => (
                    <article
                        className="p-6 bg-white border border-gray-200 shadow-sm"
                        key={index}
                    >
                        <div className="flex justify-between items-center mb-5 text-gray-500">
                            <span className="bg-gray-200 text-gray-800 text-xs font-medium inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md">
                                <HiOutlineNewspaper />
                                Article
                            </span>
                            <span className="text-sm">
                                {formatDistanceToNow(new Date(b.created_at), {
                                    addSuffix: true,
                                })}
                            </span>
                        </div>
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 hover:underline">
                            <Link href={route("blog", b.slug)}>{b.title}</Link>
                        </h2>
                        <p className="mb-5 font-light text-gray-800">
                            {truncateDescription(b.description, 210)}
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-4">
                                <img
                                    className="w-7 h-7 rounded-full"
                                    src="https://img.freepik.com/free-photo/sexy-blonde-woman-model-with-makeup-cheekbones-healthy-shiny-skin_8353-6157.jpg?w=740&t=st=1691071369~exp=1691071969~hmac=4276724a34f98ccade9b480c29e0380e9550d100b8d37ae9e7ebd26d6c296488"
                                    alt="Jese Leos avatar"
                                />
                                <span className="font-medium text-gray-800">
                                    {b.author}
                                </span>
                            </div>
                            <Link
                                href={route("blog", b.slug)}
                                className="inline-flex items-center font-medium text-gray-800 hover:underline"
                            >
                                Read more
                                <HiOutlineChevronRight />
                            </Link>
                        </div>
                    </article>
                ))}
                <Paginator
                    links={blogs.links}
                    from={blogs.from}
                    to={blogs.to}
                    total={blogs.total}
                    prev={blogs.prev_page_url}
                    next={blogs.next_page_url}
                />
            </div>
        </div>
    );
};

export default Blogs;
