import { useEffect, useState } from "react";
import ServicesCard from "./servicesCard";


const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="my-6">
            <div className="text-center space-y-5 mb-12">
                <h5 className="text-xl mb-0 text-orange-500 font-bold">Services</h5>
                <h2 className="text-5xl mt-0 font-bold text-[#151515]">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service = {service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Service;