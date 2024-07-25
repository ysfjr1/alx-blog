import React from "react";
import Hero from "../../Components/Hero";
import Blogs from "../../Components/Blogs";

const Home = ({ blogs, featuredblog, user }) => {
    return (
        <div>
            <Hero featuredblog={featuredblog} user={user} />
            <Blogs blogs={blogs} />
        </div>
    );
};

export default Home;
