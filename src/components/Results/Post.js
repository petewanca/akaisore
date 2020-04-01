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
    SecondIndent,
    NumValue
} from '../../style';
import moment from 'moment';

export const Post = ({ post }) => {
    const [showPost, setShowPost] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState('');
    let postDetail = post.selftext ? (
        post.selftext
    ) : (
        <a href={post.url} target='_blank' rel='noopener noreferrer'>
            {post.url}
        </a>
    );

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(`https://www.reddit.com${post.permalink}.json`);
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
    const postHeader = str.length > 20 ? str.slice(0, 20) : str;

    return (
        <Indent>
            <br />
            <p>
                <Variable>const </Variable>
                <VariableName>{postHeader} </VariableName>
                <Operator>
                    = ( <Param>author, {post.author}</Param> ) => {'{'}
                </Operator>
            </p>
            <SecondIndent>
                <p>
                    {/* eslint-disable-next-line */}
                    <CommentedOut> // {post.title}</CommentedOut>
                </p>
                <p>
                    <Variable>let </Variable>
                    <VariableName>created </VariableName>
                    <Operator>= </Operator>
                    <Value>
                        '{moment(post.created_utc * 1000).format('dddd, MMMM Do YYYY, h:mm:ss a')}'
                    </Value>
                    ;
                </p>
                <br />
                <p>
                    <button onClick={togglePost}>
                        <FunctionName>showBody</FunctionName>
                        <Operator>()</Operator>
                    </button>
                    ;
                </p>
                <br />
                {showPost ? (
                    <p>
                        {/* eslint-disable-next-line */}
                        <CommentedOut> /* {postDetail} */</CommentedOut>
                    </p>
                ) : null}
                <p>
                    <Variable>let </Variable>
                    <VariableName>subReddit </VariableName>
                    <Operator>= </Operator>
                    <Value>'{post.subreddit_name_prefixed}'</Value>;
                </p>
                <p>
                    <Variable>let </Variable>
                    <VariableName>subRedditSubs </VariableName>
                    <Operator>= </Operator>
                    <NumValue>{post.subreddit_subscribers}</NumValue>;
                </p>
                <br />
                <p>
                    {/* eslint-disable-next-line */}
                    <CommentedOut> // Gilded: {post.gilded}</CommentedOut>
                </p>
                <p>
                    <Variable>let </Variable>
                    <VariableName>score </VariableName>
                    <Operator>= </Operator>
                    <NumValue>{post.score}</NumValue>;
                </p>
                <p>
                    <Variable>let </Variable>
                    <VariableName>upVotes </VariableName>
                    <Operator>= </Operator>
                    <NumValue>{post.ups}</NumValue>;
                </p>
                <p>
                    <Variable>let </Variable>
                    <VariableName>downVotes </VariableName>
                    <Operator>= </Operator>
                    <NumValue>{post.downs}</NumValue>;
                </p>
                <br />
                <p>
                    <Variable>let </Variable>
                    <VariableName>comments </VariableName>
                    <Operator>= </Operator>
                    <NumValue>{post.num_comments}</NumValue>;
                </p>
                {post.num_comments ? (
                    <p>
                        <button onClick={toggleComments}>
                            <FunctionName>
                                showComments
                                <Operator>()</Operator>
                            </FunctionName>
                        </button>
                        ;
                    </p>
                ) : null}
                {/* POST COMMENTS */}
                {showComments
                    ? comments.map((comment) => <Comment key={comment.data.id} comment={comment} />)
                    : null}
            </SecondIndent>
            <p>
                <Operator>{'}'}</Operator>;
            </p>
        </Indent>
    );
};
