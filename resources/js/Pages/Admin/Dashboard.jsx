import React, { useState } from "react";
import { HiOutlineBookOpen } from "react-icons/hi";
import AdminBase from "../../Layouts/AdminBase";
import { Link } from "@inertiajs/inertia-react";
import DashboardCard from "../../Components/admin/DashboardCard";
import BlogTable from "../../Components/admin/BlogTable";
import NoAlert from "../../Components/admin/NoAlert";
import DashboardHeading from "../../Components/admin/DashboardHeading";
import Paginator from "../../Components/Paginator";

const Dashboard = ({ user, blogs }) => {
    return (
        <div>
            <DashboardHeading
                title={"Hello" + " " + user}
                subtitle="view all blogs here."
                link={route("admin.blogs.create")}
                btn_title="Add New Blog"
            />

            {/* MAIN DASHBOARD AREA */}
            <div className="space-y-6 mt-4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-2.5">
                    {/* TOTAL BLOGS CARD */}
                    <DashboardCard>
                        <div className="flex items-center justify-between">
                            <h5 className="text-base font-bold text-TEXT_MAIN">
                                Total Blogs
                            </h5>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center justify-between gap-1">
                                    <HiOutlineBookOpen
                                        className="text-TEXT_MAIN"
                                        size={20}
                                    />
                                    <span className="text-TEXT_THIRD block text-xl font-bold">
                                        {blogs.total}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </DashboardCard>
                </div>

                {/* BLOGS TABLE */}
                <div>
                    <BlogTable blogs={blogs} />
                    {blogs.data.length === 0 && (
                        <NoAlert message="You have no blogs. Start adding new." />
                    )}

                    {/* PAGINATION PART */}
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
        </div>
    );
};

export default Dashboard;
Dashboard.layout = (page) => <AdminBase children={page} title={"Dashboard"} />;
