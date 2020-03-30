import React from 'react';
import { SearchForm } from './components/Form/SearchForm';
import { NavBar } from './components/Nav/NavBar';
import { PostsContainer } from './components/Results/PostsContainer';

const App = () => {
    return (
        <div>
            <NavBar />
            <SearchForm />
            <PostsContainer />
        </div>
    );
};

export default App;
