import React from 'react';
import { SearchForm } from './components/Form/SearchForm';
import { Results } from './components/Results/Results';
import { NavBar } from './components/Nav/NavBar';

const App = () => {
    return (
        <div>
            <NavBar />
            <SearchForm />
            <Results />
        </div>
    );
};

export default App;
