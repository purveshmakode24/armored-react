import React, { useContext, useState } from "react";

type AdminContextType = {
    count: number;
    setCount: (c: number) => void;
};

const defaultValues: AdminContextType = {
    count: 0,
    setCount: () => { },
};

const AdminContext = React.createContext<AdminContextType>(
    defaultValues
);

const AdminContextProvider = ({ children }: any) => {
    const [count, setCount] = useState(0);

    const values: AdminContextType = {
        count,
        setCount
    };

    return <AdminContext.Provider value={values}>{children}</AdminContext.Provider>;
}


const useAdminContext = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error("useAdminContext must be used within AdminContextProvider");
    }
    return context;
}

export { AdminContextProvider, useAdminContext };