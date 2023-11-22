import PropTypes from 'prop-types'
import Card from "./Card/Card";

const ServiceCard = ({ services }) => {
    // console.log(services)
    return (
        <div className="h-max">
            <h1 className="font-bold text-3xl my-14">{services.category}</h1>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.services.map((service, index) => <Card key={index} service={service}></Card>)}
            </div>

        </div>
    );
};

ServiceCard.propTypes = {
    services: PropTypes.object
}

export default ServiceCard;