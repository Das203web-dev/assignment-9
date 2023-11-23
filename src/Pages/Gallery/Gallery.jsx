// import { useContext } from 'react';
// import { Context } from '../../Provider/Provider';
import Shared from '../../Shared/Shared';

const Gallery = () => {
    // const { blogs } = useContext(Context);
    // console.log(blogs)
    const imgUrl = "https://i.ibb.co/rs8SRjM/heroImg1.png"
    const title = "Our Gallery"
    return (
        <div>
            <Shared image={imgUrl} bannerTitle={title}></Shared>
            <h1 className='text-7xl mt-10 text-center mx-10'>Gallery image is coming soon</h1>
        </div>
    );
};

export default Gallery;