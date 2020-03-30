import React, { useState, useContext } from 'react';
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
