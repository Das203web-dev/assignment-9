import React from 'react';
import Marquee from 'react-fast-marquee';

const Advertising = () => {
    return (
        <div className='flex md:flex-row flex-row items-center gap-5 shadow shadow-[#101820FF] my-2 w-3/4 mx-auto'>


            <Marquee>
                {/* <Advertising></Advertising> */}
                <h1 className='text-white mx-3 text-xl'>Subscribe Us To Get special <span className='font-bold text-[#F2AA4CFF]'>Discount</span></h1>
            </Marquee>
            <button className='px-3 py-2 rounded text-white bg-[#F2AA4CFF]  '>Subscribe</button>
        </div>
    );
};

export default Advertising;