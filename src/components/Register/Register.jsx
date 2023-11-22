import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../Provider/Provider';

const Register = () => {
    const { handleRegister } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate()
    // console.log(handleRegister);
    const registrationHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        handleRegister(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
                if (result.user) {
                    navigate(location?.state ? location.state : '/')
                }
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-[#101820FF] text-[#F2AA4CFF]">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Register!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={registrationHandler} className="card-body shadow-2xl shadow-slate-600 bg-[#101820FF] text-[#F2AA4CFF]">
                        <div className="form-control">
                            <label className="label ">
                                <span className="text-[#F2AA4CFF]">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-[#F2AA4CFF]">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn w-full text-white bg-[#F2AA4CFF]">Register</button>
                        </div>
                        <h3>Already have an account ? Please <Link className='font-bold hover:underline' to={'/login'}>Login</Link></h3>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;