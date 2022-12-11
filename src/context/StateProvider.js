//Setting up context api for react to access everything on every level, this file is generally same for every project
import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();  //this command is creating a context(data layer living location) preparing the data layer

export const StateProvider = ({ reducer, initialState, children }) => (  //this is the data layer, its a higher order component
  <StateContext.Provider value={useReducer(reducer, initialState)}> {/*this block of code actually allows us to setup the data layer */}
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext); //this hook helps in pulling info from data layer, we created a hook called usestatevalue