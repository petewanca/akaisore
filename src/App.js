import React from 'react';
import { Header } from './components/Header/Header';
import { PostsContainer } from './components/Results/PostsContainer';
import { FirstIndent } from './style';
import { Footer } from './components/Footer/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <FirstIndent>
                <PostsContainer />
            </FirstIndent>
            <Footer />
            <li>add server connection string</li>
        </div>
    );
};

export default App;
