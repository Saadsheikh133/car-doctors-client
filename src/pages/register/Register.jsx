import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleCreateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createUser = result.user;
                console.log(createUser)
                form.reset()
            })
            .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 mr-8">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 py-5 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl text-center py-4 font-bold">Sign Up</h1>
                    <form onSubmit={handleCreateUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6 pb-4">
                            <input className='btn bg-orange-600 hover:bg-orange-400' type="submit" value="Sign Up" />
                        </div>
                        <p className='text-center'>Have an account? <Link className='text-orange-500 text-center' to="/login">Login</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;