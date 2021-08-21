import React, {useRef} from 'react';
import Card from '../ui/Card';
import classes from './MeetupForm.module.css'

export default function MeetupForm(props) {

    const titleRef = useRef();
    const imgRef = useRef();
    const addressRef = useRef();
    const descriptionRef = useRef();

    function handleOnSubmit(event) {
        event.preventDefault();

        const meetupData = {
            title: titleRef.current.value,
            image: imgRef.current.value,
            address: addressRef.current.value,
            description: descriptionRef.current.value
        }

        props.meetupData(meetupData)
    }

    return(
        <Card>
            <form onSubmit={handleOnSubmit} className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup title</label>
                    <input type="text" id="title" required ref={titleRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Image</label>
                    <input type="src" id="image" required ref={imgRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type="text" id="address" required ref={addressRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea rows="6" id="description" required ref={descriptionRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}