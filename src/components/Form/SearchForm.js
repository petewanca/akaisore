import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import axios from 'axios';

export const SearchForm = () => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [limit, setLimit] = useState('');
    const { setResults } = useContext(GlobalContext);

    // need to change sort and limit input to select fields...

    const handleForm = async (e) => {
        e.preventDefault();

        console.log(`Search: ${search}`);
        console.log(`Sort: ${sort}`);
        console.log(`Limit: ${limit}`);

        axios({
            method: 'GET',
            url: `http://www.reddit.com/search.json?q=${search
                .split(' ')
                .join('+')}&sort=${sort}&limit=${limit}`
        })
            .then((res) => {
                console.log(res);
                const data = res.data.data.children;
                setResults(data);
            })
            .catch((err) => console.log(err.response));
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
            <input
                placeholder='sort by'
                type='text'
                value={sort}
                onChange={(e) => setSort(e.target.value)}
            />
            <br />
            <input
                placeholder='limit amount'
                type='text'
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
            />
            <br />
            <input type='submit' value='search' />
        </form>
    );
};
