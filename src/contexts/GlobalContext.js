import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [posts, setPosts] = useState('');
    const [comments, setComments] = useState('');
    return (
        <GlobalContext.Provider value={{ posts, setPosts, comments, setComments }}>
            {children}
        </GlobalContext.Provider>
    );
};
