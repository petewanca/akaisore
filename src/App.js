import React from 'react';
import { Header } from './components/Header/Header';
import { PostsContainer } from './components/Results/PostsContainer';
import { Indent } from './style';
import { Footer } from './components/Footer/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Indent>
                <PostsContainer />
            </Indent>
            <Footer />
        </div>
    );
};

export default App;
