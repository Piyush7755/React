import React, { useEffect, useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import CommentForm from './CommentForm';

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [error, setError] = useState('');
    const [showCommentForm, setShowCommentForm] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:9000/post?id=${id}`)
            .then(response => {
                setPost(response.data.post);
                setComments(response.data.comments);
                setError('');
            })
            .catch(error => {
                setError('Failed to fetch post details. Please try again.');
                console.error('There was an error fetching the post details!', error);
            });
    }, [id]);

    const handleNewComment = (comment) => {
        setComments([...comments, comment]);
        setShowCommentForm(false);
    };
    const handleDelete = () => {
        axios.get(`http://localhost:9000/post/delete?id=${id}`)
            .then(response => {
                // Navigate back to the blog list or another appropriate page
                navigate('/blogs');
            })
            .catch(error => {
                setError('Failed to delete the post. Please try again.');
                console.error('There was an error deleting the post!', error);
            });
    };


    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {post ? (
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <p><strong>Posted by:</strong> {post.username}</p>
                    <p><strong>Date:</strong> {new Date(post.createDate).toLocaleString()}</p>
                    <button onClick={() => setShowCommentForm(true)}>Add Comment</button>
                    <button onClick={handleDelete}>Delete Post</button>
                </div>
            ) : (
                <p>Loading post details...</p>
            )}
            <h3>Comments</h3>
            {comments.length > 0 ? (
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>
                            <p>{comment.body}</p>
                            <p><strong>Commented by:</strong> {comment.username}</p>
                            <p><strong>Date:</strong> {new Date(comment.createDate).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No comments available</p>
            )}
            {showCommentForm && (
                <CommentForm postId={id} onCommentSubmitted={handleNewComment} />
            )}
        </div>
    );
}

export default PostDetail;
