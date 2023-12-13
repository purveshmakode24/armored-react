import React, { useContext, useState } from "react";
import AuthService from "./features/auth/service";
import { User } from "./utils/types";
import { AdminContextProvider } from "./features/admin/context";
import { UserContextProvider } from "./features/user/context";

type AppContextType = {
    currentUser: User;
    setCurrentUser: (c: User) => void;
    count: number;
    setCount: (c: number) => void;
};

const defaultValues: AppContextType = {
    currentUser: null,
    setCurrentUser: () => { },
    count: 0,
    setCount: () => { },
};

const AppContext = React.createContext<AppContextType>(
    defaultValues
);

const AppContextProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
    const [count, setCount] = useState(0);

    const globalValues: AppContextType = {
        currentUser,
        setCurrentUser,
        count,
        setCount
    };

    return (
        <AppContext.Provider value={globalValues}>
            <AdminContextProvider>
                <UserContextProvider>
                    {children}
                </UserContextProvider>
            </AdminContextProvider>
            {/* + Other FeatureContext providers if any */}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within AppContextProvider");
    }
    return context;
}

export { AppContextProvider, useAppContext };