import React, { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

export default function FavoritePage() {
  const favoriteContext = useContext(FavoritesContext);

  let content = "";
  if (favoriteContext.counterFavorites === 0) {
    content = <div>There are no farorites!</div>;
  } else {
    content = <MeetupList meetups={favoriteContext.favorites} />;
  }

  return (
    <div>
      <h6>Favourite Page</h6>
      {content}
    </div>
  );
}
