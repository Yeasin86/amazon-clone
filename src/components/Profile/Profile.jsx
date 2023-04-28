import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Profile = () => {
    const {logOut} = useContext(AuthContext); 
    const handleLogOut = () =>{
        logOut()
    }
    return (
        <div>
            <h1>Users Profile</h1>

            <h4>Hi</h4>

            <button>Log Out</button>
        </div>
    );
};

export default Profile;