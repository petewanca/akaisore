import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [results, setResults] = useState('');
    return (
        <GlobalContext.Provider value={{ results, setResults }}>{children}</GlobalContext.Provider>
    );
};
