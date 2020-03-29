import React, { useState } from 'react';

export const ResultItem = ({ data }) => {
    const [showPost, setShowPost] = useState(false);
    const [showComments, setShowComments] = useState(false);

    const togglePost = () => {
        setShowPost(!showPost);
        // `http://www.reddit.com/${data.permalink}.json`
    };

    const toggleComments = () => {
        setShowComments(!showComments);
        // `http://www.reddit.com/${data.permalink}.json`
        // need to navigate to comments of post
    };

    return (
        <div>
            <h5>{data.title}</h5>
            <p>Link: {data.permalink}</p>

            <button onClick={togglePost}>show post</button>
            <p>Author: {data.author}</p>
            <p>Created: {data.created}</p>
            <p>Score: {data.score}</p>
            <p>Up votes: {data.ups}</p>
            <p>Down votes: {data.downs}</p>
            <p>Gilded: {data.gilded}</p>
            <p>Comments: {data.num_comments}</p>
            <button onClick={toggleComments}>show comments</button>
            <p>Subreddit: {data.subreddit_name_prefixed}</p>
            <p>Subreddit subs: {data.subreddit_subscribers}</p>
        </div>
    );
};
