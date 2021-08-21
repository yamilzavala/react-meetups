import React from 'react';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css'

export default function MeetupList ({meetups}) {
    // const [meetupsData, setMeetupsData] = useState([]);

    // useEffect(async () => {
    //     const response = await fetch("https://react-meetups-8d3c2-default-rtdb.firebaseio.com/meetups.json", {
    //         method: 'GET',
    //         headers: {'Content-Type':'application/json'}
    //     });
    //     const data = await response.json();
    //     const dataArray = [];
    //     for(const prop in data) {
    //         dataArray.push({...data[prop], id: prop})
    //     }
    //     setMeetupsData(dataArray)
    // }, []);

    return(
       <ul className={classes.list}>
           {meetups.map(meetup => (
               <MeetupItem key={meetup.id} meetup={meetup} />
           ))}
       </ul>
    )
}