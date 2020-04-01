import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { Post } from './Post';
import { Indent } from '../../style';

export const PostsContainer = () => {
    const { posts } = useContext(GlobalContext);

    return posts.length ? (
        <Indent>
            {posts.map((post) => (
                <Post key={post.data.id} post={post.data} />
            ))}
        </Indent>
    ) : null;
};
