import { useContext } from 'react';
import { Context } from '../../Provider/Provider';

const Profile = () => {
    const { currentUser } = useContext(Context);
    // console.log(currentUser)
    return (
        <div>
            <img src="" alt="" />
        </div>
    );
};

export default Profile;