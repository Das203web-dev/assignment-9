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
        <div className="mt-5 space-y-5">
            <img className="md:w-2/3 w-full mx-auto h-[26rem]" src={theResult[0]?.package_img} alt="" />
            <div className=" text-center space-y-3 p-5">
                <h1 className="text-5xl uppercase font-bold"> {theResult[0]?.package_for}</h1>
                <h1 className="text-3xl">Package : {theResult[0]?.tier}</h1>
                <p className="text-xl lg:w-1/4 mx-auto w-full">{theResult[0]?.brief_description}</p>
            </div>
        </div>
    );
};

export default ServiceDetails;