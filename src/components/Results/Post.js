import React, { useState, useEffect } from 'react';
import { Comment } from './Comment';

export const Post = ({ post }) => {
    const [showPost, setShowPost] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState('');
    let postDetail = post.selftext ? post.selftext : post.url;

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(`http://www.reddit.com${post.permalink}.json`);
            let data = await response.json();
            return data[1].data.children;
        };

        try {
            fetchData().then((data) => {
                setComments(data);
            });
        } catch (error) {
            console.log(error);
        }
    }, [post]);

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    const togglePost = () => {
        setShowPost(!showPost);
    };

    const box = {
        border: 'solid 3px black',
        background: 'pink',
        borderRadius: '8px',
        overflow: 'auto',
        padding: '8px',
        margin: '10px auto'
    };

    return (
        <div style={box}>
            <h5>{post.title}</h5>
            <p>Created: {post.created}</p>
            <p>Author: {post.author}</p>
            <button onClick={togglePost}>show post</button>
            {showPost ? <p>{postDetail}</p> : null}
            <p>Subreddit: {post.subreddit_name_prefixed}</p>
            <p>Subreddit subs: {post.subreddit_subscribers}</p>
            <p>Score: {post.score}</p>
            <p>Up votes: {post.ups}</p>
            <p>Down votes: {post.downs}</p>
            <p>Gilded: {post.gilded}</p>
            <p>Comments: {post.num_comments}</p>
            {post.num_comments ? <button onClick={toggleComments}>Go to Comments</button> : null}
            {showComments
                ? comments.map((comment) => <Comment key={comment.data.id} comment={comment} />)
                : null}
        </div>
    );
};
