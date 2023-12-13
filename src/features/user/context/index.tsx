import React, { useContext } from "react";

type UserContextType = {
    // example: number;
    // setExample: (c: number) => void;
};

const defaultValues: UserContextType = {
    // example: 0,
    // setExample: () => {},
};

const UserContext = React.createContext<UserContextType>(
    defaultValues
);

const UserContextProvider = ({ children }: any) => {
    // const [example, setExample] = useState(0);

    const values: UserContextType = {
        // example,
        // setExample
    };

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}


const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUserContext must be used within UserContextProvider");
    }
    return context;
}

export { UserContextProvider, useUserContext };