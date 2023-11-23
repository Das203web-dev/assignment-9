// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import img1 from '../../../bannerImage/bannerImage/anniversery.jpg';
// import img2 from '../../../bannerImage/bannerImage/birthday.jpeg';
// import img3 from '../../../bannerImage/bannerImage/engagement.webp';
// import img4 from '../../../bannerImage/bannerImage/wedding.jpg';
// import img5 from '../../../bannerImage/bannerImage/seo_retirement-party-ideas_013123.jpg';

// import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';



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
                    className="mySwiper mb-10 w-full h-96 lg:h-[500px] relative"
                >
                    <SwiperSlide className='bg-[#101820FF]'><img className='w-full h-full md:h-[360px] lg:h-full opacity-40' src="https://i.ibb.co/Cnd2FV7/anniversery.jpg" alt="" />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#F2AA4CFF] lg:text-6xl text-center font-medium text-xl '>
                            <h1 className='uppercase'>Want to make your<br />Anniversery <br />special</h1>
                            <Link to={'/contact'}><button className='bg-[#F2AA4CFF] text-white px-4 py-2 text-lg rounded mt-5'>Contact Us</button></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#101820FF] h-full'><img className='w-full h-full md:h-[360px] lg:h-full opacity-40' src="https://i.ibb.co/YB8YyDV/birthday.jpg" alt="" />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#F2AA4CFF] lg:text-6xl text-center font-medium text-xl '>
                            <h1 className='uppercase'>Want to make your<br />birthday <br />special</h1>
                            <Link to={'/contact'}><button className='bg-[#F2AA4CFF] text-white px-4 py-2 text-lg rounded mt-5'>Contact Us</button></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#101820FF]'><img className='w-full h-full  md:h-[360px] lg:h-full opacity-40' src="https://i.ibb.co/bsmpyyw/engagement.webp" alt="" />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#F2AA4CFF] lg:text-6xl text-center font-medium text-xl '>
                            <h1 className='uppercase'>Want to make your<br />engagement <br />special</h1>
                            <Link to={'/contact'}><button className='bg-[#F2AA4CFF] text-white px-4 py-2 text-lg rounded mt-5'>Contact Us</button></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#101820FF]'><img className='w-full h-full md:h-[360px] lg:h-full opacity-40' src="https://i.ibb.co/ZNJHHm2/wedding.png" alt="" />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#F2AA4CFF] lg:text-6xl text-center font-medium text-xl '>
                            <h1 className='uppercase'>Want to make your<br />Wedding <br />special</h1>
                            <Link to={'/contact'}><button className='bg-[#F2AA4CFF] text-white px-4 py-2 text-lg rounded mt-5'>Contact Us</button></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[#101820FF]'><img className='w-full h-full md:h-[360px] lg:h-full opacity-40' src="https://i.ibb.co/R6PQG4s/seo-retirement-party-ideas-013123.jpg" alt="" />
                        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#F2AA4CFF] lg:text-6xl text-center font-medium text-xl '>
                            <h1 className='uppercase'>Want to make your<br />retirement <br />special</h1>
                            <Link to={'/contact'}><button className='bg-[#F2AA4CFF] text-white px-4 py-2 text-lg rounded mt-5'>Contact Us</button></Link>
                        </div>
                    </SwiperSlide>


                </Swiper>

            </>
        </div>
    );
};

export default Banner;