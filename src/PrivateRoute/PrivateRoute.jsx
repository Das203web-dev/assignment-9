import { useContext } from 'react';
import { Context } from '../Provider/Provider';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useContext(Context);
    const location = useLocation();
    if (loading) {
        return <span className="loading flex mx-auto justify-center text-center items-center  loading-bars loading-lg"></span>
    }
    if (currentUser) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;