import Card from "./Card/Card";

const ServiceCard = ({ service }) => {
    return (
        <div className="h-max">
            <h1 className="font-bold text-3xl mb-10">{service.category}</h1>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {service.services.map((service, index) => <Card key={index} service={service}></Card>)}
            </div>
        </div>
    );
};

export default ServiceCard;