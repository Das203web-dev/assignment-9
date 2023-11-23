import { useContext } from 'react';
import { Context } from '../../Provider/Provider';

const Profile = () => {
    const { currentUser } = useContext(Context);
    console.log(currentUser)
    return (
        <div>
            <img className='w-10 h-10 rounded-full' src={currentUser.photoURL} alt="" />
        </div>
    );
};

export default Profile;