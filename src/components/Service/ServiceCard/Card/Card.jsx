import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ service }) => {
    // console.log(service)
    return (
        <div className='p-6 flex flex-col shadow-2xl h-full hover:shadow-slate-600 mb-20 text-left'>

            <h1 className='shadow-2xl hover:shadow-slate-600 font-bold lg:text-center mb-2 text-4xl lg:p-2 py-2'>{service.tier}</h1>
            <h1 className='text-3xl mb-6 font-medium'>{service.title}</h1>
            <p className='flex-grow'>{service.description.map((singleDescription, index) => <li key={index}>{singleDescription.point}</li>)}</p>
            <Link to={`/service/${service.package_for}/${service.tier}`}><button className='mt-5 hover:bg-transparent hover:shadow-2xl hover:text-[#F2AA4CFF] hover:shadow-slate-600 w-full font-semibold text-white text-xl bg-[#F2AA4CFF] rounded p-2'>Details</button></Link>

            {/* <p>{service.description[0]}</p> */}
        </div>
    );
};

Card.propTypes = {
    service: PropTypes.object
}

export default Card;

