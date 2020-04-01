import React from 'react';
import { Variable, VariableName, Operator, Value } from '../../style';

export const Comment = ({ comment }) => {
    return (
        <div>
            {comment.data.body ? (
                <div>
                    <Variable>const </Variable>
                    <VariableName>{comment.data.author} </VariableName>
                    <Operator>= </Operator>
                    <Value>'{comment.data.body}'</Value>;
                </div>
            ) : null}
        </div>
    );
};
