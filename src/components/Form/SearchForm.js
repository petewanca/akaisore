import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import axios from 'axios';

export const SearchForm = () => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('relevance');
    const [limit, setLimit] = useState(5);
    const { setResults } = useContext(GlobalContext);

    const handleForm = async (e) => {
        e.preventDefault();

        console.log(`Search: ${search}`);
        console.log(`Sort: ${sort}`);
        console.log(`Limit: ${limit}`);
        if (!search) {
            alert('enter search text');
        } else {
            axios({
                method: 'GET',
                url: `http://www.reddit.com/search.json?q=${search
                    .split(' ')
                    .join('+')}&sort=${sort}&limit=${limit}`
            })
                .then((res) => {
                    const data = res.data.data.children;
                    setResults(data);
                })
                .catch((err) => console.log(err.response));
        }
    };

    return (
        <form onSubmit={handleForm}>
            <input
                placeholder='search term'
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <br />
            <label htmlFor='sort-by'>Sort by: </label>
            <select onChange={(e) => setSort(e.target.value)}>
                <option value='relevance'>Relevance</option>
                <option value='top'>Top</option>
                <option value='new'>New</option>
                <option value='comments'>Comments</option>
            </select>
            <br />
            <label htmlFor='set-limit'>Limit: </label>
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
