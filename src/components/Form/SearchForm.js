import React, { useState, useContext } from 'react';
import { Variable, VariableName, FunctionName, Operator, NumValue } from '../../style';
import { GlobalContext } from '../../contexts/GlobalContext';

export const SearchForm = () => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('relevance');
    const [limit, setLimit] = useState(5);
    const { setPosts } = useContext(GlobalContext);

    const fetchData = async () => {
        let response = await fetch(
            `http://www.reddit.com/search.json?q=${search
                .split(' ')
                .join('+')}&sort=${sort}&limit=${limit}&self:yes`
        );
        let data = await response.json();
        return data.data.children;
    };

    const handleForm = (e) => {
        e.preventDefault();
        if (!search) {
            alert('enter search text');
        } else {
            try {
                fetchData().then((data) => {
                    setPosts(data);
                });
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <form onSubmit={handleForm}>
            <Variable>cosnt </Variable>
            <VariableName>searchTerm </VariableName>
            <Operator>= </Operator>
            <input
                placeholder="'enter search term'"
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <br />
            <Variable>cosnt </Variable>
            <VariableName>sortBy </VariableName>
            <Operator>= </Operator>
            <select onChange={(e) => setSort(e.target.value)}>
                <option value='relevance'>'relevance'</option>
                <option value='top'>'top'</option>
                <option value='new'>'new'</option>
                <option value='comments'>'comments'</option>
            </select>
            <br />
            <Variable>cosnt </Variable>
            <VariableName>limitTo </VariableName>
            <Operator>= </Operator>
            <select onChange={(e) => setLimit(e.target.value)}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
            </select>
            <br />
            <input type='submit' value='search' />
        </form>
    );
};
