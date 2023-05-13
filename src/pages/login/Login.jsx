import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../shared/socialLogin/SocialLogin';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleLoginUser = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 mr-8">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 py-5 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl text-center py-4 font-bold">Login</h1>
                    <form onSubmit={handleLoginUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6 pb-4">
                            <input className='btn bg-orange-600 hover:bg-orange-400' type="submit" value="Login" />
                        </div>
                        <p className='text-center'>New to cars doctor? <Link className='text-orange-500 text-center' to="/signUp">Sign Up</Link> </p>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;