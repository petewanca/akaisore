import React from 'react';
import { Operator, Value, VariableName, FunctionName, NumValue } from '../../style';
export const Footer = () => {
    return (
        <div>
            <p>
                <Operator>{'}'}</Operator>
            </p>
            <br />
            <p>
                <FunctionName>app</FunctionName>
                <Operator>.</Operator>
                <NumValue>listen</NumValue>
                <Operator>(</Operator>
                <VariableName>port</VariableName>, <Operator>()</Operator> <Operator>=> </Operator>
                <FunctionName>console</FunctionName>
                <Operator>.</Operator>
                <FunctionName>log</FunctionName>
                <Operator>(</Operator>`<Value>server up @ http://localhost:</Value>
                <VariableName>$</VariableName>
                <Operator>{'{'}</Operator>
                <VariableName>port</VariableName>
                <Operator>{'}'}</Operator>`<Operator>)</Operator>
                <Operator>)</Operator>;
            </p>
        </div>
    );
};
