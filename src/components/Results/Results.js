import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { ResultItem } from './ResultItem';

export const Results = (props) => {
    const { results } = useContext(GlobalContext);

    return results.length ? (
        <>
            {results.map((result) => (
                <ResultItem key={result.data.id} data={result.data} />
            ))}
        </>
    ) : null;
};
