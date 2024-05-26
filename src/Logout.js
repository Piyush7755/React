import React from 'react';
import axios from 'axios';
import { deleteCookie } from './Cookie';
import { useNavigate } from 'react-router-dom';
function Logout() {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Clear token and user id from local storage
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        

        // Send logout request to backend
        axios.get('http://localhost:9000/logout')
            .then((res) => {
                // Handle logout success (if needed)
                
                console.log('Logout successful');
                deleteCookie("username")
                navigate('/');
                
            })
            .catch((err) => {
                // Handle logout failure (if needed)
                console.error('Logout failed:', err);
            });
    };

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;
