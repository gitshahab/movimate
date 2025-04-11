import { createContext, useContext, useRef } from "react";
import LoadingBar from "react-top-loading-bar";

const LoadingContext = createContext();

export const LoadingProvider = ({children}) => {
    const loadingRef = useRef(null);

    const startLoading = () => {
        loadingRef.current?.continuousStart();
    };

    const completeLoading = () => {
        loadingRef.current?.complete();
    };


    return (
        <LoadingContext.Provider value={{startLoading, completeLoading}}>
            <LoadingBar color="#f11946" ref={loadingRef} height={3} />
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoading = () => useContext(LoadingContext);