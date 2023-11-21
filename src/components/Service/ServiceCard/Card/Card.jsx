import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ service }) => {
    return (
        <div className='p-6 flex flex-col shadow-2xl h-96 hover:shadow-slate-600 md:mx-10 mx-5 mb-20 text-left'>

            <h1 className='shadow-2xl hover:shadow-slate-600 font-bold lg:text-center mb-2 text-4xl lg:p-2 py-2'>{service.tier}</h1>
            <h1 className='text-3xl mb-3 font-medium'>{service.title}</h1>
            <p className='flex-grow'>{service.description.map((singleDescription, index) => <li key={index}>{singleDescription.point}</li>)}</p>
            <Link><button className='mt-5 hover:bg-transparent hover:shadow-2xl hover:text-[#F2AA4CFF] hover:shadow-slate-600 w-full font-semibold text-white text-xl bg-[#F2AA4CFF] rounded p-2'>Details</button></Link>
            {/* <p>{service.description[0]}</p> */}
        </div>
    );
};

export default Card;