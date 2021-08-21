import React, {useContext} from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

export default function MeetupItem({ meetup }) {
  const favoriteContext = useContext(FavoritesContext);

  const isFavorite = favoriteContext.isFavorite(meetup.id);

  function toggleFavorite() {    
    if (!isFavorite) {
      favoriteContext.addFavorites(meetup)      
    } else {
      favoriteContext.removeFavorites(meetup.id)
    }
  }

  return (
    <li key={meetup.id} className={classes.meetup}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          {meetup.title} <br />
          {meetup.description} <br />
          {meetup.address}
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavorite}>{isFavorite ? 'Remove to favorites' : 'Add to Favourites'}</button>
        </div>
      </Card>
    </li>
  );
}
