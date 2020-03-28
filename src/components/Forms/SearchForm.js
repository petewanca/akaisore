import React, { useState } from 'react';
import axios from 'axios';
import { Results } from '../Results/Results';

export const SearchForm = () => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');
    const [limit, setLimit] = useState('');
    const [results, setResults] = useState('');

    const redditSearch = (e) => {
        e.preventDefault();
        if (search) {
            axios({
                method: 'GET',
                url: `http://www.reddit.com/search.json?q=${search}&sort=${sort}&limit=${limit}`
            })
                .then((res) => {
                    const data = res.data.data.children;
                    setResults(data);
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <div>
            <form onSubmit={redditSearch}>
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
            <Results results={results} />
        </div>
    );
};
