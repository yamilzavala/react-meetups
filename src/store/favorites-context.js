import React, {createContext, useState} from 'react';

const FavoritesContext = createContext({
    favorites: [],
    counterFavorites: 0
}); 

export function FavoritesContextProvider(props) {
    const [favoritesState, setFavorites] = useState([]);

    function addFavorites(meetup) {
        setFavorites((prevFavorites) => {
           return prevFavorites.concat(meetup);
        })
    }

    function removeFavorites(idMeetup) {
        setFavorites((prevFavorites) => {
           return prevFavorites.filter(meetup => meetup.id !== idMeetup);
        })
    }

    function isFavorite(idMeetup) {
        return favoritesState.some(meetup => meetup.id === idMeetup);
    }

    const state = {
      favorites: favoritesState,
      counterFavorites: favoritesState.length,
      addFavorites,
      removeFavorites,
      isFavorite  
    };

    return <FavoritesContext.Provider value={state}>
        {props.children}
    </FavoritesContext.Provider>

}

export default FavoritesContext;