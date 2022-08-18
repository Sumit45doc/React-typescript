import { createContext, useState } from "react";

export type AuthUser = {
    name: string;
    email: string;
}

type UserContextProviderProps = {
    children: React.ReactNode
}

type UserContextType = {
    user: AuthUser | null;
    setUser: React.Dispatch<React.SetStateAction<AuthUser>>;
}

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = (props: UserContextProviderProps) => {
    const [user, setUser] = useState({} as AuthUser);

    return <UserContext.Provider value={{user, setUser}}>{props.children}</UserContext.Provider>
}