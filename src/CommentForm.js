// CommentForm.js
import React, { useState } from 'react';
import axios from 'axios';

function CommentForm({ postId, onCommentSubmitted }) {
    const [commentBody, setCommentBody] = useState('');
    const [error, setError] = useState('');
    const handleCommentChange = (e) => {
        setCommentBody(e.target.value);
    };

    const submitComment = () => {
        console.log(postId);
        axios.post(`http://localhost:9000/comment?postId=${postId}`, {
                    
            
            body: commentBody,
           
        })
        .then(response => {
            onCommentSubmitted(response.data);  // Callback to update parent component
            setCommentBody('');
            setError('');
        })
        .catch(error => {
            setError('Failed to submit comment. Please try again.');
            console.error('There was an error submitting the comment!', error);
        });
    };

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <h3>Add a Comment</h3>
            <textarea 
                value={commentBody}
                onChange={handleCommentChange}
                placeholder="Write your comment here"
            />
            <button onClick={submitComment}>Submit Comment</button>
        </div>
    );
}

export default CommentForm;
