// Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';

function Header() {
    const navigate = useNavigate();

    const goToBlogs = () => {
        navigate('/blogs');
    };

    const goToUserBlog = () => {
        navigate('/userblog');
    };

    const createNewPost = () => {
        navigate('/createpost');
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <button onClick={goToBlogs}>Fetch Blogs</button>
            <button onClick={goToUserBlog}>Fetch User Blogs</button>
            <button onClick={createNewPost}>Create New Post</button>
            <Logout />
        </div>
    );
}

export default Header;
