import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { Post } from './Post';

export const PostsContainer = () => {
    const { posts } = useContext(GlobalContext);

    return posts.length ? (
        <>
            {posts.map((post) => (
                <Post key={post.data.id} post={post.data} />
            ))}
        </>
    ) : null;
};
