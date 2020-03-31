import React from 'react';
import { SearchForm } from '../Form/SearchForm';
import { Value, Variable, VariableName, Param, FunctionName, Operator } from '../../style';

export const Header = () => {
    return (
        <div>
            <div>
                <p>
                    <Variable>const </Variable>
                    <VariableName>express </VariableName>
                    <Operator>= </Operator>
                    <FunctionName>require</FunctionName>
                    <Operator>
                        (<Value>'Express'</Value>)
                    </Operator>
                    ;
                </p>
                <p>
                    <Variable>const </Variable>
                    <VariableName>app </VariableName>
                    <Operator>= </Operator>
                    <FunctionName>
                        express<Operator>()</Operator>
                    </FunctionName>
                    ;
                </p>
                <p>
                    <Variable>const </Variable>
                    <VariableName>mongoose </VariableName>
                    <Operator>= </Operator>
                    <FunctionName>require</FunctionName>
                    <Operator>
                        (<Value>'mongoose'</Value>)
                    </Operator>
                    ;
                </p>
                <SearchForm />
                <div>
                    <FunctionName>module.exports </FunctionName>
                    <Operator>= </Operator>
                    <Operator>(</Operator>
                    <Param> akaisore </Param>
                    <Operator>) </Operator>
                    <Operator>=> {'{'}</Operator>
                </div>
            </div>
        </div>
    );
};
