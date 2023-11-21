import React, { useContext } from 'react';
import { Context } from '../../Provider/Provider';
import BlogCard from './BlogCard/BlogCard';

const Blogs = () => {

    const { blogs } = useContext(Context)
    return (
        <div>
            {
                blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default Blogs;