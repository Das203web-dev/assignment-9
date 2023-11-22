import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../Provider/Provider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const { handleLogin } = useContext(Context);
    // const [loginInfo, setLoginInfo] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location)
    const loginHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        handleLogin(email, password)
            .then(result => {
                e.target.reset();
                console.log(result.user)
                if (result.user) {
                    // toastAlert()
                    toast.success('Login Successful', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                navigate(location?.state ? location.state : "/")
                // setLoginInfo(result.user)

            })
            .catch(error => {
                toast.error((error.message), {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                // setLoginInfo(error.message)
            })
    }
    // console.log(loginInfo)
    return (
        <div className="hero min-h-screen relative bg-[#101820FF] text-[#F2AA4CFF]">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={loginHandler} className="card-body shadow-2xl shadow-slate-600 bg-[#101820FF] text-[#F2AA4CFF]">
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
                            <button className="btn w-full text-white bg-[#F2AA4CFF]">Login</button>
                        </div>
                        <h3>Do not have any account ? Please <Link className='font-bold hover:underline' to={'/register'}>Register</Link></h3>
                    </form>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
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
        </div>
    );
};

export default Login;