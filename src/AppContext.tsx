import React, { useContext, useState } from "react";
import AuthService from "./features/auth/service";
import { User } from "./utils/types";
import { AdminContextProvider } from "./features/admin/context";
import { UserContextProvider } from "./features/user/context";

type AppContextType = {
    currentUser: User;
    setCurrentUser: (c: User) => void;
};

const defaultValues: AppContextType = {
    currentUser: null,
    setCurrentUser: () => { }
};

const AppContext = React.createContext<AppContextType>(
    defaultValues
);

const AppContextProvider = ({ children }: any) => {
    const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

    const globalValues: AppContextType = {
        currentUser,
        setCurrentUser
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