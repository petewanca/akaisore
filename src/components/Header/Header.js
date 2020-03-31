import React from 'react';
import { SearchForm } from '../Form/SearchForm';
import {
    Value,
    Variable,
    VariableName,
    Param,
    FunctionName,
    Operator,
    NumValue
} from '../../style';

export const Header = () => {
    return (
        <div>
            <p>
                <Variable>const </Variable>
                <VariableName>express </VariableName>
                <Operator>= </Operator>
                <FunctionName>require</FunctionName>
                <Operator>
                    (<Value>'express'</Value>)
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
            <p>
                <Variable>const </Variable>
                <VariableName>port </VariableName>
                <Operator>= </Operator>
                <FunctionName>
                    process<Operator>.</Operator>env<Operator>.</Operator>PORT{' '}
                    <Operator>|| </Operator>
                    <NumValue>3000</NumValue>
                </FunctionName>
                ;
            </p>
            <p>
                <Variable>const </Variable>
                <VariableName>
                    {'{'} ExecuteSearch {'}'}{' '}
                </VariableName>
                <Operator>= </Operator>
                <FunctionName>require</FunctionName>
                <Operator>
                    (<Value>'./routes/api/search/'</Value>)
                </Operator>
                ;
            </p>
            <p>
                <FunctionName>require</FunctionName>
                <Operator>
                    (<Value>'dotenv'</Value>)
                </Operator>
                <Operator>
                    .<FunctionName>config</FunctionName>()
                </Operator>
                ;
            </p>
            <br />
            <li>add express middleware</li>
            <li>add mongoose connection string</li>
            <SearchForm />
            <br />
            <div>
                <FunctionName>module.exports </FunctionName>
                <Operator>= </Operator>
                <Operator>(</Operator>
                <Param> akaisore </Param>
                <Operator>) </Operator>
                <Operator>=> {'{'}</Operator>
            </div>
        </div>
    );
};
