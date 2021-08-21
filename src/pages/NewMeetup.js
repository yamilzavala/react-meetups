import React from "react";
import MeetupForm from "../components/meetups/MeetupForm";
import { useHistory } from "react-router-dom";

export default function NewMeetupPage(props) {
  const history = useHistory();

  function handleAddNewMeetup(data) {
    fetch(
      "https://react-meetups-8d3c2-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Cotent-Type": "application/json",
        },
      }
    ).then(() => {
        history.replace('/')
    });
    //console.log(data);
  }

  return (
    <div>
      <h6>New Meetup Page</h6>
      <MeetupForm meetupData={handleAddNewMeetup} />
    </div>
  );
}
