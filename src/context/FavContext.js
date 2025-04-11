import { createContext, useContext, useEffect, useReducer } from "react";
import { favReducer } from "../reducer/favReducer";

const initialState = JSON.parse(localStorage.getItem("favItem")) || [];

const FavContext = createContext();

export const FavProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(favReducer, initialState);

    useEffect(() => {
        localStorage.setItem("favItem", JSON.stringify(state))
    },[state])
    return (
        <FavContext.Provider value={{fav: state, dispatch}}>
            {children}
        </FavContext.Provider>
    );
}

export const useFav = () => useContext(FavContext);