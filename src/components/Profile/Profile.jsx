import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { redirect, useNavigate } from 'react-router-dom';

const Profile = () => {
    const {logOut} = useContext(AuthContext); 
    const navigate = useNavigate(); 
    const handleLogOut = () =>{
        logOut()
        .then(result =>{
            navigate('/')
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <h1>Users Profile</h1>

            <h4>Hi</h4>

            <button onClick={handleLogOut}>Log Out</button>
        </div>
    );
};

export default Profile;