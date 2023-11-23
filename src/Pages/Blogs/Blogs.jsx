import { useContext } from 'react';
import { Context } from '../../Provider/Provider';
import BlogCard from './BlogCard/BlogCard';
import Shared from '../../Shared/Shared';
import bannerImage from "../../../bannerImage/bannerImage/anniversery.jpg"

const Blogs = () => {

    const { blogs } = useContext(Context);
    const title = "Our Blog";
    return (

        <section>
            <Shared image={bannerImage} bannerTitle={title}></Shared>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:mx-20 mx-5'>
                {
                    blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </section>
    );
};

export default Blogs;