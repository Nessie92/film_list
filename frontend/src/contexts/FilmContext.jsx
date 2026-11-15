import { createContext, useState, useContext, useEffect } from "react";

const FilmContext = createContext()

export const useFilmContext = () => useContext(FilmContext)

export const FilmProvider = ({children}) => {
    const [favourites, setFavourites] = useState([])

useEffect(() => {
    const storedFavs = localStorage.getItem("favourites")

    if(storedFavs) {
        setFavourites(JSON.parse(storedFavs))
    }
}, [])

    return <FilmContext.Provider>
        {children}
    </FilmContext.Provider>
}
