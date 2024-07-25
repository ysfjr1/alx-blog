import React from "react";
import SinglePost from "../../Components/SinglePost";
import { Link } from "@inertiajs/inertia-react";

const Post = ({ blog, otherBlogs }) => {
    return (
        <div>
            <section className="bg-gray-900">
                <div className="flex items-center justify-end mx-10 pt-5">
                    <Link
                        href={route("home")}
                        className="text-sm text-white hover:underline"
                    >
                        Home
                    </Link>
                </div>
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 flex items-center justify-center">
                    <img src={blog.image} className="w-2/3 h-[400px]" alt="img" />
                </div>
            </section>

            <SinglePost blog={blog} />

            <aside className="py-10">
                <div className="px-10 mx-auto max-w-screen-xl">
                    <h2 className="mb-8 text-2xl font-bold text-gray-900">
                        Other blogs
                    </h2>
                    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        {otherBlogs.map((b, index) => (
                            <article className="max-w-xs" key={index}>
                                <Link href={route("blog", b.slug)}>
                                    <img
                                        src={b.image}
                                        className="mb-5 rounded-lg"
                                        alt="Image"
                                    />
                                </Link>
                                <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900">
                                    <Link href={route("blog", b.slug)}>
                                        {b.title}
                                    </Link>
                                </h2>
                                <p className="mb-4 font-light text-gray-500">
                                    Over the past year, Volosoft has undergone
                                    many changes! After months of preparation.
                                </p>
                                <Link
                                    href={route("blog", b.slug)}
                                    className="inline-flex items-center font-medium underline underline-offset-4 text-gray-600 hover:no-underline"
                                >
                                    Read more
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Post;
