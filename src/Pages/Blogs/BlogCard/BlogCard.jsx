import PropTypes from 'prop-types';
const BlogCard = ({ blog }) => {
    // console.log(blog)
    const { title, image, publisher, time, description } = blog;
    return (
        <div className='p-6 flex flex-col shadow-2xl h-full hover:shadow-slate-600 mb-20 text-left space-y-4'>
            <img className='rounded h-60 w-full' src={image} alt="" />
            <h1 className='text-2xl font-medium'>{title}</h1>
            <p>by {publisher} | {time}</p>
            <p>{description}</p>
        </div>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.object
}

export default BlogCard;