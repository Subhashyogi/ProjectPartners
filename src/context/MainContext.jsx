import React, { createContext, useContext, useState } from 'react';

const MainContext = createContext();
export const MainProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    return (
        <MainContext.Provider value={{user, setUser}}>
            {children}
        </MainContext.Provider>
    );
}

export const useMainContext = () => useContext(MainContext);
