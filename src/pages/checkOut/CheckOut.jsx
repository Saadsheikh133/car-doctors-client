import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext)
    const { title, _id, price, img } = service;

    const handleBookings = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const phone = form.phone.value;
        const message = form.message.value;
        const booking = {
            name,
            service: title,
            price: price,
            service_id: _id,
            img,
            date,
            email,
            phone,
            message
        }

        fetch('https://car-doctors-server-xi.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('service booking successfully')
                }
        })
    }
    return (
        <div>
            <form onSubmit={handleBookings} className="card-body bg-[#F3F3F3] p-24 rounded-xl">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' placeholder="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="Number" name='phone' placeholder="Your phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} placeholder="Your email" className="input input-bordered" />
                    </div>
                </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your message</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name='message' placeholder="Bio"></textarea>
                    </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary bg-orange-600" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;