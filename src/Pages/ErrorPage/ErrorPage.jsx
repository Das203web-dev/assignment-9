import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate(-1)
    }
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-5 text-center">
            <h1 className="text-7xl font-bold">404</h1>
            <h3 className="text-3xl">Page not found</h3>
            <button onClick={goHome} className="px-3 py-2 rounded text-white bg-[#F2AA4CFF]">Go back</button>
        </div>
    );
};

export default ErrorPage;