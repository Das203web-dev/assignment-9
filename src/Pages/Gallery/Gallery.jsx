import { useContext } from 'react';
import { Context } from '../../Provider/Provider';

const Gallery = () => {
    const { blogs } = useContext(Context);
    // console.log(getContext)
    return (
        <div>
            gallery : {blogs.length}
        </div>
    );
};

export default Gallery;