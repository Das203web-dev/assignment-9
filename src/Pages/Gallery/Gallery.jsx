import { useContext } from 'react';
import { Context } from '../../Provider/Provider';
import Shared from '../../Shared/Shared';


const Gallery = () => {
    const { blogs } = useContext(Context);
    // console.log(getContext)
    return (
        <div>
            <Shared ></Shared>
            gallery : {blogs.length}
        </div>
    );
};

export default Gallery;