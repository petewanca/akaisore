import React, { useState } from 'react';

export const Post = ({ data }) => {
    const [showPost, setShowPost] = useState(false);
    let postDetail = data.selftext ? data.selftext : 'no text to display... sry :/';

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
            <h5>{data.title}</h5>
            <p>Created: {data.created}</p>
            <p>Author: {data.author}</p>
            <button onClick={togglePost}>show post</button>
            {showPost ? <p>{postDetail}</p> : null}
            <p>Subreddit: {data.subreddit_name_prefixed}</p>
            <p>Subreddit subs: {data.subreddit_subscribers}</p>
            <p>Score: {data.score}</p>
            <p>Up votes: {data.ups}</p>
            <p>Down votes: {data.downs}</p>
            <p>Gilded: {data.gilded}</p>
            <p>Comments: {data.num_comments}</p>
            <button>Go to Comments</button>
        </div>
    );
};
