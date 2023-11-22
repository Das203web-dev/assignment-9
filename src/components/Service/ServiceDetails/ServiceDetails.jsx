import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const elements = useLoaderData();
    const { category, package: packageId } = useParams();
    // console.log(category);
    const result = [];
    elements.categories.map(service => {
        const serviceData = service.services.filter(ser => ser.package_for === category);
        result.push(serviceData);

    });

    // console.log(result);
    let theResult = [];
    result.map(r => {
        if (r.length !== 0) {
            const getPackage = r.find(p => p.tier === packageId);
            theResult.push(getPackage);
        }
    })
    console.log(theResult)
    return (
        <div style={{ backgroundColor: theResult[0]?.bg_color }}>
            <h1 className="text-5xl">{theResult[0].tier}</h1>
            <h1 className="text-5xl">{theResult[0].package_for}</h1>
            <p>{theResult[0].brief_description}</p>
        </div>
    );
};

export default ServiceDetails;