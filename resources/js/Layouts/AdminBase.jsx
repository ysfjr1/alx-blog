import { Head } from "@inertiajs/inertia-react";
import React from "react";
import Navbar from "../Components/admin/navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePage } from "@inertiajs/inertia-react";

export default function Base({ children, title }) {
    const { flash } = usePage().props;

    const contextClass = {
        success: "bg-green-100 border border-green-500",
        error: "bg-red-100 border border-red-500",
        info: "bg-blue-100 border border-blue-500",
        warning: "bg-yellow-100 border border-yellow-500",
    };

    if (flash.success) {
        const notify = () => toast.success(flash.success);
        notify();
    } else if (flash.error) {
        const notify = () => toast.error(flash.error);
        notify();
    }

    return (
        <div className="flex flex-col bg-gray-100 h-screen w-screen overflow-x-hidden">
            <Head title={title} />
            <main>
                <Navbar />
                <div className="md:p-9 p-5">{children}</div>
            </main>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="light"
                toastClassName={({ type }) =>
                    contextClass[type] +
                    " relative flex items-center text-gray-600 text-sm font-semibold py-2 px-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer m-5 sm:mx-auto sm:my-2"
                }
            />
        </div>
    );
}
