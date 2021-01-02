import React, {useContext, useReducer} from 'react';

//Prepares the data layer
export const StateContext = React.createContext();

// Wrapper provider for the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull info from the data layer
export const useStateValue = () => useContext(StateContext);
