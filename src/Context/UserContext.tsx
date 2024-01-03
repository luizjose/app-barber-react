import React, { createContext, useReducer, ReactNode } from "react";
import { UserReducer } from "../reducers/UserReducer";
type UserState = {
    avatar: string;
    favorites: any[]; // Substitua 'any[]' pelo tipo apropriado para seus favoritos
    appointments: any[]; // Substitua 'any[]' pelo tipo apropriado para seus compromissos
};

type UserAction = { type: 'setAvatar'; payload: { avatar: string } };

const initialState: UserState = {
    avatar: '',
    favorites: [],
    appointments: [],
};

const UserContext = createContext<{ state: UserState; dispatch: React.Dispatch<UserAction> } | undefined>(undefined);

type UserProviderProps = {
    children: ReactNode;
};

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [ state, dispatch  ] = useReducer(UserReducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
