
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function UserBlog() {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState('');
    const username = localStorage.getItem('username');
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:9000/blog/${username}`)
            .then(response => {
                setBlogs(response.data.list);
                setError('');
            })
            .catch(error => {
                setError('Failed to fetch blogs. Please try again.');
                console.error('There was an error fetching the blogs!', error);
            });
    }, []);

    const viewPostDetail = (id) => {
        navigate(`/post/${id}`);
    };

    return (
        <div>
            <h2>Blogs</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {blogs.length > 0 ? (
                <ul>
                    {blogs.map(blog => (
                        <li key={blog.id}>
                            <h4>{blog.title}</h4>
                            <button onClick={() => viewPostDetail(blog.id)}>View Post</button>
                            <p>{blog.body}</p>
                            <p><strong>Posted by:</strong> {blog.username}</p>
                            <p><strong>Date:</strong> {new Date(blog.createDate).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No blogs available</p>
            )}
        </div>
    );
}

export default UserBlog;
