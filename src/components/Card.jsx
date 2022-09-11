import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Card = (props) => {
    const [Title, setTitle] = useState("");
    const [Notifications, setNotifications] = useState([]);

    const loadNotifications = async () => {

        if (props.APIPARAM === "gn") {
            setTitle("GENERAL NOTIFICATION");
        } else if (props.APIPARAM === "sn") {
            setTitle("STUDENT NOTIFICATION");
        } else {
            setTitle("EXAM NOTIFICATION");
        }

        try {
            const { data } = await axios.get(`https://soanoticeserver.herokuapp.com/${props.APIPARAM}`);
            setNotifications(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        loadNotifications();
    }, [props.APIPARAM]);
    return <>

        <h2 className='notificationCategory'>{Title}</h2>

        {
            Notifications.map((notification, index) => {
                return <div key={index} className='notificationCard'>
                    <div className='eventIndex'># {index + 1}</div>
                    <div className='eventDate'>{(notification.s_date).toUpperCase()}</div>
                    <div className='eventTitle'>{notification.event}</div>
                    <div className='eventLink'>
                        <a href={notification.eventLink}>VISIT 🔗</a>
                    </div>
                </div>
            })
        }
    </>

}

export default Card;
