import React from 'react';

const BlogCard = ({ blog }) => {
    console.log(blog)
    const { title, image, publisher, time, description } = blog;
    return (
        <div className='p-5 rounded space-y-3 shadow-2xl'>
            <img className='rounded h-60 w-full' src={image} alt="" />
            <h1 className='text-2xl font-medium'>{title}</h1>
            <p>by {publisher} | {time}</p>
            <p>{description}</p>
        </div>
    );
};

export default BlogCard;