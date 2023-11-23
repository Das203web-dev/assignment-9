import PropTypes from 'prop-types';
const Shared = ({ image, bannerTitle }) => {
    return (
        <div className='relative bg-white mb-24'>
            <img className='w-full h-56 md:h-[360px] lg:h-[500px]' src={image} alt="" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h1 className='md:text-6xl text-4xl'>{bannerTitle}</h1>
            </div>
        </div>
    );
};

Shared.propTypes = {
    image: PropTypes.string,
    bannerTitle: PropTypes.string
}

export default Shared;