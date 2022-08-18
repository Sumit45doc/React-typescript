import { theme } from "./theme";
import React from 'react';

type ThemeContextProviderprops = {
    children: React.ReactNode;
}

export const ThemeContext = React.createContext(theme);

export const ThemeContextprovider = (props: ThemeContextProviderprops ) => {
    return (<ThemeContext.Provider value={theme} >{props.children}</ThemeContext.Provider>)
}