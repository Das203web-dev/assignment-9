import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div className=' text-[#F2AA4CFF]'>
            <Header></Header>
            <Outlet ></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;