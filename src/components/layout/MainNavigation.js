import React, {useContext} from 'react';
import FavoritesContext from '../../store/favorites-context';
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css'

export default function MainNavigation() {
    const favoritesContext = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>AllMeetupPage</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites</Link>
                        <span  className={classes.badge}>{favoritesContext.counterFavorites}</span>
                    </li>
                    <li>
                        <Link to='/newMeetup'>Add Meetup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}