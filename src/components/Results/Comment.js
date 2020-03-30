import React from 'react';

export const Comment = ({ comment }) => {
    console.log(comment);
    return <div>{comment.data.body ? <li>{comment.data.body}</li> : null}</div>;
};
