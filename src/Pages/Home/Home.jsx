import Banner from '../../components/Banner/Banner';
import Service from '../../components/Service/Service';
// import { useLoaderData } from 'react-router-dom';
import Advertising from '../../components/Advertising/Advertising';
import heroImg2 from '../../../bannerImage/heroImg/Employment-PNG-Images.png'
import PiejonMap from '../../components/PiejonMap/PiejonMap';
// import { useContext } from 'react';
// import { Context } from '../../Provider/Provider';

const Home = () => {
    // const allData = useLoaderData([]);
    // const { currentUser } = useContext(Context)
    // console.log(allData.categories)
    return (
        <div>
            {/* <Header></Header> */}
            <Advertising></Advertising>
            <Banner></Banner>
            {/* <Advertising></Advertising> */}



            <section className='flex lg:flex-row flex-col justify-between items-center shadow-2xl shadow-slate-600 md:m-20 m-5 p-4 text-center h-full xl:h-[300px] gap-5 md:text-left'>
                <div className='h-min w-full'>
                    <img className='lg:h-full h-full w-3/4 md:w-2/3 lg:w-3/4 md:mx-auto lg:mx-auto pl-5' src="https://i.ibb.co/rs8SRjM/heroImg1.png" alt="" />
                </div>
                <div className=' px-5 space-y-5 w-full'>
                    <h1 className='text-3xl lg:text-4xl font-semibold'>Your Vision +
                        Our Expertise = The Perfect Partnership
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore accusamus dolores repellendus necessitatibus beatae rerum officiis voluptatibus pariatur quas mollitia iusto consequuntur quos eaque incidunt aut nostrum, recusandae expedita quod?</p>
                </div>
            </section>

            <Service></Service>

            <section className='flex lg:flex-row flex-col justify-between items-center shadow-2xl shadow-slate-600 gap-10 mb-4 md:m-20 m-5 py-4 text-center md:text-left'>
                <div className='space-y-5 px-5 '>
                    <h1 className='text-3xl lg:text-4xl font-semibold'>From Venue Selection to Event Execution, We’re With You Every Step of the Way!</h1>
                    <p>We’ll make sure that every detail is taken care of so that you can feel confident and worry-free on the day of your event. Whether you’re hosting an intimate dinner soiree or a large corporate event, we’ve got you covered.</p>
                </div>
                <div className='bg-transparent'>
                    <img className='lg:h-max lg:w-full md:w-2/3 md:mx-auto' src={heroImg2} alt="" />
                </div>
            </section>
            <section className='flex flex-col gap-20 md:flex-row justify-between items-center md:mx-20 mx-5 mt-24 mb-24'>
                <div className='md:w-full w-full md:text-start text-center'>
                    <h1 className='text-4xl font-bold mb-5'>News & Events</h1>
                    <p>Subscribe to receive our monthly newsletter and
                        receive all the latest in unique, creative and
                        extraordinary event news.</p>
                </div>
                <div className='flex flex-col gap-5  md:w-full w-full '>
                    <input className='text-[#F2AA4CFF] px-4 py-2 border border-[#F2AA4CFF] rounded' type="email" name="email" id="" placeholder='Your Email' />
                    <input className='text-[#F2AA4CFF] px-4 py-2 border border-[#F2AA4CFF] rounded' type="password" name="password" id="" placeholder='Your Password' />
                    <button className='bg-[#F2AA4CFF] text-white px-4 py-2 rounded'>Subscribe</button>
                </div>
            </section>
            <div className=' md:mx-20 mx-5 md:mt-24'>
                <PiejonMap></PiejonMap>
            </div>
        </div>
    );
};

export default Home;