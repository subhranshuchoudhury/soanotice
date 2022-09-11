import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Card = (props) => {
    const APP_VERSION = 3;
    const [Title, setTitle] = useState("");
    const [Notifications, setNotifications] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [isError, setisError] = useState(false);

    const loadNotifications = async () => {

        if (props.APIPARAM === "gn") {
            setTitle("GENERAL NOTIFICATION");
        } else if (props.APIPARAM === "sn") {
            setTitle("STUDENT NOTIFICATION");
        } else {
            setTitle("EXAM NOTIFICATION");
        }

        try {
            setLoading(true);
            const { data } = await axios.get(`https://soanoticeserver.herokuapp.com/${props.APIPARAM}`);
            setNotifications(data);
            setLoading(false);
            setisError(false);
        } catch (error) {
            console.log("ERROR");
            setisError(true);

        }
    }
    useEffect(() => {
        loadNotifications();
    }, [props.APIPARAM]);
    return <>

        <h2 className='notificationCategory'>{Title}</h2>
        <div className='homeNavigation'>
            <button><Link style={props.APIPARAM === "gn" ? { backgroundColor: "#E94560" } : null} className='navigateLink' to="/soanotice/">GENERAL NOTIFICATION</Link></button>
            <button><Link style={props.APIPARAM === "sn" ? { backgroundColor: "#E94560" } : null} className='navigateLink' to="/soanotice/student-notice">STUDENT NOTICE</Link></button>
            <button><Link style={props.APIPARAM === "en" ? { backgroundColor: "#E94560" } : null} className='navigateLink' to="/soanotice/exam-notice">EXAM NOTICE</Link></button>
        </div>

        {
            Loading ? <div className='loadingSpinner'>
                <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> : <div className='loadingSpinner'></div>
        }

        {
            props.info.length !== 0 && props.info[0].version > 3 ? <div className="alert alert-danger" role="alert">
                Please Update Your App:  <a href={props.info[0].download_link} className="alert-link">⬇️ Download Now!</a>.
            </div> : null
        }

        {
            props.info.length !== 0 && props.info[0].message !== "" ? <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong style={{ color: "black" }}>Message: </strong> {props.info[0].message}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> : null
        }

        {
            isError ? (<div className="alert alert-danger" role="alert">
                Error occurred, Kindly check your internet connection or  <a href="https://about.me" className="alert-link">Report Error!</a>.
            </div>) : null
        }

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
        <footer>
            <i>managed & created by <a href='https://about.me/subhranshu'>@Subhranshu</a></i>
        </footer>
    </>

}

export default Card;
