import React from 'react';

const Shared = ({ image, bannerTitle }) => {
    return (
        <div className='relative bg-transparent mb-24'>
            <img className='w-full h-56 md:h-[360px] lg:h-[500px] opacity-40' src={image} alt="" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-6xl'>{bannerTitle}</h1>
            </div>
        </div>
    );
};

export default Shared;