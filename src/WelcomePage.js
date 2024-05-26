// WelcomePage.js
import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';

function WelcomePage() {
   
    const userName = localStorage.getItem('username');
    const navigate = useNavigate();

    const goToBlogs = () => {
        navigate('/blogs');
    };
    const goToUserBlog=()=>{
        navigate('/userblog');
    }
    const createNewpost=()=>{
        navigate('/createpost');
    }

    return (
        <div>
            <h2>Welcome, {userName}!</h2>
            <p>This is your personalized welcome message.</p>
            
            <Logout />
        </div>
    );
}

export default WelcomePage;
