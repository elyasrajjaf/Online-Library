import { useState, useEffect, createContext } from "react"

const MoviesContext = createContext()

const MoviesProvider = ({children}) => {

    

    return(
        <MoviesContext.Provider
            value={{

            }}
        >
            {children}
        </MoviesContext.Provider>
    )
}

export {
    MoviesProvider
}

export default MoviesContext