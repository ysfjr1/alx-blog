import { Link } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { HiCheckCircle, HiOutlineStar, HiStar } from "react-icons/hi";

const BlogTable = ({ blogs }) => {
    const handleDelete = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this blog?"
        );

        if (confirmDelete) {
            Inertia.delete(route("admin.blogs.destroy", id));
        }
    };
    const handleFeatured = (id) => {
        Inertia.put(route("admin.blog_set_featured", id));
    };
    const truncateDescription = (description, maxLength = 30) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + "...";
        }
        return description;
    };
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-TEXT_SEC">
                <thead className="text-xs text-TEXT_THIRD uppercase bg-BG_WHITE border-b">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Title
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Description
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Featured
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.data.map((b, index) => (
                        <tr
                            className="bg-BG_WHITE border-b hover:bg-gray-50"
                            key={index}
                        >
                            <td className="py-4 px-6">
                                <Link
                                    href={route("blog", "b.id")}
                                    className="hover:underline hover:text-blue-600"
                                >
                                    {b.title}
                                </Link>
                            </td>
                            <td className="py-4 px-6">
                                {truncateDescription(b.description, 50)}
                            </td>
                            <td className="py-4 px-6">
                                <span className="flex items-center">
                                    {b.featured ? (
                                        <HiStar
                                            size={20}
                                            className="text-yellow-500 hover:cursor-pointer"
                                            onClick={() => handleFeatured(b.id)}
                                        />
                                    ) : (
                                        <HiOutlineStar
                                            size={20}
                                            className="hover:cursor-pointer"
                                            onClick={() => handleFeatured(b.id)}
                                        />
                                    )}
                                </span>
                            </td>
                            <td className="flex items-center py-4 px-6 space-x-3">
                                <Link
                                    href={route("admin.blogs.edit", b.id)}
                                    className="font-medium text-blue-600 hover:underline"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(b.id)}
                                    className="font-medium text-red-600 hover:underline"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BlogTable;
