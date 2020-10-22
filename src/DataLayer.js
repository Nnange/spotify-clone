import React,{ createContext, useContext, useReducer} from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({initailState, reducer, children}) => (
    <DataLayerContext.Provider value={useReducer(reducer, initailState)}>
        {children}
    </DataLayerContext.Provider>
);