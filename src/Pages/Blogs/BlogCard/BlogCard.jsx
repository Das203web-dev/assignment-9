import React from 'react';

const BlogCard = ({ blog }) => {
    console.log(blog)
    const { title } = blog;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default BlogCard;