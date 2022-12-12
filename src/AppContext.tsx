import React, { useState } from "react";
import AuthService from "./features/auth/auth.service";
import { User } from "./utils/types";

type AppContextType = {
    currentUser: User;
    setCurrentUser: (c: User) => void;
    count: number;
    setCount: (c: number) => void;
};

const AppContextDefaultValues: AppContextType = {
    currentUser: null,
    setCurrentUser: () => { },
    count: 0,
    setCount: () => { },
};


export const AppContext = React.createContext<AppContextType>(
    AppContextDefaultValues
);

export const AppContextProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
    const [count, setCount] = useState(0);

    const values: AppContextType = {
        currentUser,
        setCurrentUser,
        count,
        setCount
    };

    return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}