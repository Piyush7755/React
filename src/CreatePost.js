import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleCreatePost = () => {
        axios.post('http://localhost:9000/post', {
            title,
            body
        })
        .then(response => {
            alert('Post created successfully!');
            navigate('/blogs');
        })
        .catch(error => {
            setError('Failed to create post. Please try again.');
            console.error('There was an error creating the post!', error);
        });
    };

    return (
        <div>
            <h3>Create a New Post</h3>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <br />
            <button onClick={handleCreatePost}>Submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default CreatePost;
