import { useContext } from 'react';
import { Context } from '../Provider/Provider';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { currentUser } = useContext(Context);
    if (currentUser) {
        return children;
    }
    return <Link to={'/login'}></Link>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;