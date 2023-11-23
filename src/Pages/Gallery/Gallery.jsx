import { useContext } from 'react';
import { Context } from '../../Provider/Provider';
import Shared from '../../Shared/Shared';
import bannerImage from '../../../bannerImage/heroImg/1f6f66391e72468c92c47818f6545af8.png'

const Gallery = () => {
    const { blogs } = useContext(Context);
    // console.log(getContext)
    const title = "Our Gallery"
    return (
        <div>
            <Shared image={bannerImage} bannerTitle={title}></Shared>
            <h1 className='text-7xl mt-10 text-center mx-10'>Gallery image is coming soon</h1>
        </div>
    );
};

export default Gallery;