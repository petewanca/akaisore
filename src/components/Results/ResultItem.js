import React from 'react';

export const ResultItem = ({ data }) => {
    console.log(data);
    return (
        <div>
            <h5>{data.title}</h5>
            <p>Link: {data.permalink}</p>
            <p>Author: {data.author}</p>
            <p>Created: {data.created}</p>
            <p>Score: {data.score}</p>
            <p>Up votes: {data.ups}</p>
            <p>Down votes: {data.downs}</p>
            <p>Gilded: {data.gilded}</p>
            <p>Comments: {data.num_comments}</p>
            <p>Subreddit: {data.subreddit_name_prefixed}</p>
            <p>Subreddit subs: {data.subreddit_subscribers}</p>
        </div>
    );
};
