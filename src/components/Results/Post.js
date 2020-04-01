import React, { useState, useEffect } from 'react';
import { Comment } from './Comment';
import {
    Param,
    Variable,
    VariableName,
    FunctionName,
    Operator,
    Value,
    CommentedOut,
    Indent,
    SecondIndent
} from '../../style';

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

    const str = post.title.split(' ').join('');
    // console.log(str);
    const postHeader = str.length > 20 ? str.slice(0, 20) : str;
    // console.log(str);
    // const postHeader = str.length > 20 ? str.splice(20, str.length - 20) : str;
    // console.log(postHeader);
    return (
        <Indent>
            <br />
            {/* POST TITLE */}
            <p>
                <Variable>const </Variable>
                <VariableName>{postHeader} </VariableName>
                <Operator>
                    = ( <Param>...params</Param> ) => {'{'}
                </Operator>
            </p>
            <SecondIndent>
                <p>
                    <Variable>let </Variable>
                    <VariableName>title </VariableName>
                    <Operator>= </Operator>
                    <Value>'{post.title}'</Value>
                </p>
                {/* POST CREATE DATE */}
                <p>
                    <Variable>let </Variable>
                    <VariableName>created </VariableName>
                    <Operator>= </Operator>
                    <Value>'{post.created}'</Value>
                </p>
                {/* POST AUTHOR */}
                <p>
                    <Variable>let </Variable>
                    <VariableName>author </VariableName>
                    <Operator>= </Operator>
                    <Value>{post.author}</Value>
                </p>
                {/* SHOW POST BODY BUTTON */}
                <p>
                    <Variable>let </Variable>
                    <FunctionName>
                        showPost
                        <Operator>
                            = (
                            <button onClick={togglePost}>
                                <Param> showPost </Param>
                            </button>
                            ) =>
                        </Operator>
                    </FunctionName>
                    <Operator>{' { '}</Operator>
                    <Operator>{' } '}</Operator>
                </p>
                {/* POST BODY */}
                {showPost ? (
                    <p>
                        <Variable>let </Variable>
                        <VariableName>postDetail </VariableName>
                        <Operator>= </Operator>
                        <Value>{postDetail}</Value>
                    </p>
                ) : null}
                {/* SUBREDDIT */}
                <p>
                    <Variable>let </Variable>
                    <VariableName>subReddit </VariableName>
                    <Operator>= </Operator>
                    <Value>{post.subreddit_name_prefixed}</Value>
                </p>
                {/* SUBREDDIT SUB COUNT */}
                <p>
                    <Variable>let </Variable>
                    <VariableName>subRedditSubs </VariableName>
                    <Operator>= </Operator>
                    <Value>{post.subreddit_subscribers}</Value>
                </p>
                {/* SCORE */}
                <p>
                    <Variable>let </Variable>
                    <VariableName>score </VariableName>
                    <Operator>= </Operator>
                    <Value>{post.score}</Value>
                    {/* eslint-disable-next-line */}
                    <CommentedOut> // Gilded: {post.gilded}</CommentedOut>
                </p>
                {/* UP VOTES */}
                <p>
                    <Variable>let </Variable>
                    <VariableName>upVotes </VariableName>
                    <Operator>= </Operator>
                    <Value>{post.ups}</Value>
                </p>
                {/* DOWN VOTES */}
                <p>
                    <Variable>let </Variable>
                    <VariableName>downVotes </VariableName>
                    <Operator>= </Operator>
                    <Value>{post.downs}</Value>
                </p>
                {/* COMMENT COUNT */}
                <p>
                    <Variable>let </Variable>
                    <VariableName>comments </VariableName>
                    <Operator>= </Operator>
                    <Value>{post.num_comments}</Value>
                </p>
                {post.num_comments ? (
                    <p>
                        <Variable>let </Variable>
                        <FunctionName>
                            showComments
                            <Operator>
                                = (
                                <button onClick={toggleComments}>
                                    <Param>showComments</Param>
                                </button>
                                ) =>
                            </Operator>
                        </FunctionName>
                        <Operator>{' {'} </Operator>

                        <Operator>{' }'} </Operator>
                    </p>
                ) : null}
                {/* POST COMMENTS */}
                {showComments
                    ? comments.map((comment) => <Comment key={comment.data.id} comment={comment} />)
                    : null}
            </SecondIndent>
            <p>
                <Operator>{'}'}</Operator>
            </p>
        </Indent>
    );
};
