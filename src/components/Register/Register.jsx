import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../Provider/Provider';
import { ToastContainer, toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const { handleRegister, googleLogin } = useContext(Context);
    const [registrationError, setRegistrationError] = useState(null)
    const location = useLocation();
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                if (result.user) {

                    navigate(location?.state ? location.state : "/")
                }

            })
            .catch(error => {
                console.log(error.message)

            })
    }
    // console.log(handleRegister);
    const registrationHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            return setRegistrationError("Password must greater then or equals to 6")
        }
        else if (!/^(?=.*[A-Z])(?=.*[\W_]).*$/.test(password)) {
            return setRegistrationError("Password must contain one uppercase letter and special character")
        }

        handleRegister(email, password)
            .then(result => {
                e.target.reset()
                if (result.user) {
                    toast.success('Registration Successful', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                }
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/')

                }, 3000);
            })
            .catch(error => {
                toast.error((error.message), {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
        setRegistrationError("")
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
                        <div>
                            {
                                registrationError ? registrationError : ""
                            }
                        </div>
                        <button onClick={handleGoogleLogin}>
                            <FcGoogle className='mx-auto text-2xl'></FcGoogle>
                        </button>
                    </form>
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />

                </div>
            </div>
            {/* <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            /> */}
        </div>
    );
};

export default Register;