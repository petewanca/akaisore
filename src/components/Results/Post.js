import React, { useState, useEffect } from 'react';
import { Comment } from './Comment';
import styled from 'styled-components';

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

    return (
        <PostBox>
            {/* POST TITLE */}
            <p>
                <Variable>const </Variable>
                <VariableName>title </VariableName>
                <Operator>= </Operator>
                <Value>'{post.title}'</Value>
            </p>
            {/* POST CREATE DATE */}
            <p>
                <Variable>const </Variable>
                <VariableName>created </VariableName>
                <Operator>= </Operator>
                <Value>'{post.created}'</Value>
            </p>
            {/* POST AUTHOR */}
            <p>
                <Variable>const </Variable>
                <VariableName>author </VariableName>
                <Operator>= </Operator>
                <Value>{post.author}</Value>
            </p>

            {/* SHOW POST BODY BUTTON */}
            <p>
                <Variable>const </Variable>
                <FunctionName>
                    showPost<Operator> = () =></Operator>
                </FunctionName>
                <Operator>{' {'} </Operator>
                <button onClick={togglePost}>show post</button>
                <Operator>{' }'} </Operator>
            </p>
            {/* POST BODY */}
            {showPost ? (
                <p>
                    <Variable>const </Variable>
                    <VariableName>postDetail </VariableName>
                    <Operator>= </Operator>
                    <Value>{postDetail}</Value>
                </p>
            ) : null}
            {/* SUBREDDIT */}
            <p>
                <Variable>const </Variable>
                <VariableName>subReddit </VariableName>
                <Operator>= </Operator>
                <Value>{post.subreddit_name_prefixed}</Value>
            </p>
            {/* SUBREDDIT SUB COUNT */}
            <p>
                <Variable>const </Variable>
                <VariableName>subRedditSubs </VariableName>
                <Operator>= </Operator>
                <Value>{post.subreddit_subscribers}</Value>
            </p>
            {/* SCORE */}
            <p>
                <Variable>const </Variable>
                <VariableName>score </VariableName>
                <Operator>= </Operator>
                <Value>{post.score}</Value>
            </p>
            {/* UP VOTES */}
            <p>
                <Variable>const </Variable>
                <VariableName>upVotes </VariableName>
                <Operator>= </Operator>
                <Value>{post.ups}</Value>
            </p>
            {/* DOWN VOTES */}
            <p>
                <Variable>const </Variable>
                <VariableName>downVotes </VariableName>
                <Operator>= </Operator>
                <Value>{post.downs}</Value>
            </p>
            {/* GILDED */}
            <p>
                <CommentedOut>// Gilded: {post.gilded}</CommentedOut>
            </p>
            {/* COMMENT COUNT */}
            <p>
                <Variable>const </Variable>
                <VariableName>comments </VariableName>
                <Operator>= </Operator>
                <Value>{post.num_comments}</Value>
            </p>
            {post.num_comments ? (
                <p>
                    <Variable>const </Variable>
                    <FunctionName>
                        showComments<Operator> = () =></Operator>
                    </FunctionName>
                    <Operator>{' {'} </Operator>
                    <button onClick={toggleComments}>comments</button>
                    <Operator>{' }'} </Operator>
                </p>
            ) : null}
            {/* POST COMMENTS */}
            {showComments
                ? comments.map((comment) => <Comment key={comment.data.id} comment={comment} />)
                : null}
        </PostBox>
    );
};

const Variable = styled.span`
    color: #e0453a;
`;

const VariableName = styled.span`
    color: #e0bf3a;
`;

const FunctionName = styled.span`
    color: #55c5c9;
`;

const Operator = styled.span`
    color: #cf74cf;
`;

const Value = styled.span`
    color: #65cf9f;
`;

const CommentedOut = styled.span`
    color: #8f8f8f;
`;

const PostBox = styled.div`
    border: 2px solid #fff;
    padding: 20px;
    margin: 15px 0;
    border-radius: 8px;
`;
