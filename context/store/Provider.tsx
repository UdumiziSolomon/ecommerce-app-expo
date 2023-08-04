import React, { createContext, useReducer } from 'react';
import { ThemeReducer, CartReducer } from '../reducers';
import { themeState as themeInitialState, cartState as cartInitialState} from '../states';


export const GlobalContext = createContext({});

export const Provider = ( { children } : any) => {

    const [cartState, cartDispatch] = useReducer(CartReducer, cartInitialState);
    const [themeState, themeDispatch] = useReducer(ThemeReducer, themeInitialState);

    return (
        <GlobalContext.Provider value={{ 
            cartState,
            cartDispatch,
            themeState,
            themeDispatch
         }}>
            {children}
        </GlobalContext.Provider>
    )
}
