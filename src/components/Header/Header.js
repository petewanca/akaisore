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
            <p>
                <FunctionName>app</FunctionName>
                <Operator>.</Operator>
                <FunctionName>use</FunctionName>
                <Operator>(</Operator>
                <VariableName>express</VariableName>
                <Operator>.</Operator>
                <Variable>urlencoded</Variable>
                <Operator>(</Operator>
                {'{'} <VariableName>extended</VariableName>
                <Operator>:</Operator> <Value>true</Value> {'}'}
                <Operator>)))</Operator>;
            </p>
            <p>
                <FunctionName>app</FunctionName>
                <Operator>.</Operator>
                <FunctionName>use</FunctionName>
                <Operator>(</Operator>
                <VariableName>express</VariableName>
                <Operator>.</Operator>
                <FunctionName>json</FunctionName>
                <Operator>())</Operator>;
            </p>
            <br />
            <p>
                <FunctionName>mongoose</FunctionName>
                <Operator>.</Operator>
                <VariableName>connect</VariableName>
                <Operator>(</Operator>
                <FunctionName>process</FunctionName>
                <Operator>.</Operator>
                <FunctionName>env</FunctionName>
                <Operator>.</Operator>
                <FunctionName>DB_LINK</FunctionName>
                <Operator>, {'{'}</Operator>
                <VariableName>useNewUrlParser</VariableName>
                <Operator>:</Operator> <Value>true</Value>
                <Operator>,</Operator> <VariableName>useUnifiedTopology</VariableName>
                <Operator>:</Operator> <Value>true</Value>
                <Operator>{'}'})</Operator>;
            </p>
            <br />
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
