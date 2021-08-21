import React, {useEffect, useState} from 'react';
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

export default function AllMeetupPage() {
  const [meetupsData, setMeetupsData] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(async () => {
      setLoading(true)
      const response = await fetch("https://react-meetups-8d3c2-default-rtdb.firebaseio.com/meetups.json", {
          method: 'GET',
          headers: {'Content-Type':'application/json'}
      });
      const data = await response.json();
      const dataArray = [];
      for(const prop in data) {
          dataArray.push({...data[prop], id: prop})
      }
      setLoading(false)
      setMeetupsData(dataArray)
  }, []);

  return(
  <div>
    <div>AllMeetupPage Page</div>   
       {!loading ? <MeetupList meetups={meetupsData} /> : 'Loading...'  }
  </div>
  )
}
