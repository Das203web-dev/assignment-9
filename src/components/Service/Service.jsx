import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServices(data.categories))
    }, [])
    // console.log(services)
    return (
        <div className='text-center md:mx-20 mx-5 mt-24'>
            <h1 className='mb-10 text-4xl'>Our services</h1>
            <div className=''>
                <div className=''>
                    {
                        services.map(service => <ServiceCard key={service.id} services={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;