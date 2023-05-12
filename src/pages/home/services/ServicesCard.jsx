
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="img" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{ title }</h2>
                <div className='flex justify-between items-center'>
                <p className="text-xl font-bold text-orange-500">Price: ${ price }</p>
                    <Link to={`/checkOut/${_id}`}>
                        <FaArrowRight className='text-orange-500 cursor-pointer'></FaArrowRight>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;