// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Banner = () => {
    return (
        <div className='relative'>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper w-full h-96 lg:h-[500px] relative"
                >
                    <SwiperSlide className='bg-[#101820FF]'><img className='w-full h-full md:h-[360px] lg:h-full opacity-40' src="/bannerImage/anniversery.jpg" alt="" />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#F2AA4CFF] lg:text-6xl text-center font-medium text-xl '>
                            <h1 className='uppercase'>Want to make your<br />Anniversery <br />special</h1>
                            <button className='bg-[#F2AA4CFF] text-white px-4 py-2 text-lg rounded mt-5'>Contact Us</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#101820FF] h-full'><img className='w-full h-full md:h-[360px] lg:h-full opacity-40' src="/bannerImage/birthday.jpeg" alt="" />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#F2AA4CFF] lg:text-6xl text-center font-medium text-xl '>
                            <h1 className='uppercase'>Want to make your<br />birthday <br />special</h1>
                            <button className='bg-[#F2AA4CFF] text-white px-4 py-2 text-lg rounded mt-5'>Contact Us</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#101820FF]'><img className='w-full h-full  md:h-[360px] lg:h-full opacity-40' src="/bannerImage/engagement.webp" alt="" />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#F2AA4CFF] lg:text-6xl text-center font-medium text-xl '>
                            <h1 className='uppercase'>Want to make your<br />engagement <br />special</h1>
                            <button className='bg-[#F2AA4CFF] text-white px-4 py-2 text-lg rounded mt-5'>Contact Us</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#101820FF]'><img className='w-full h-full md:h-[360px] lg:h-full opacity-40' src="/bannerImage/wedding.jpg" alt="" />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#F2AA4CFF] lg:text-6xl text-center font-medium text-xl '>
                            <h1 className='uppercase'>Want to make your<br />Wedding <br />special</h1>
                            <button className='bg-[#F2AA4CFF] text-white px-4 py-2 text-lg rounded mt-5'>Contact Us</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#101820FF]'><img className='w-full h-full md:h-[360px] lg:h-full opacity-40' src="/bannerImage/seo_retirement-party-ideas_013123.jpg" alt="" />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#F2AA4CFF] lg:text-6xl text-center font-medium text-xl '>
                            <h1 className='uppercase'>Want to make your<br />retirement <br />special</h1>
                            <button className='bg-[#F2AA4CFF] text-white px-4 py-2 text-lg rounded mt-5'>Contact Us</button>
                        </div>
                    </SwiperSlide>


                </Swiper>

            </>
        </div>
    );
};

export default Banner;