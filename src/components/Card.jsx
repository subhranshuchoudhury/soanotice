import React from 'react';

const Card = (props) => {
    const dayCalculate = (oneDate) => {
        const DATE = oneDate.split('-');
        const day = DATE[0];
        const month = DATE[1];
        let date = new Date(),
            fullYear = date.getFullYear(),
            next = new Date(fullYear, month - 1, day);

        date.setHours(0, 0, 0, 0);

        if (date > next) next.setFullYear(fullYear + 1);

        return Math.round((next - date) / 8.64e7);
    }
    return (
        <div key={props.index} className={dayCalculate(props.data.l_date) > 60 ? "eventCard outOfDate" : "eventCard"}>
            <div className='eventTitle'>📌{props.index + 1}. {(props.data.event).toUpperCase()}</div>
            <div className='eventDate'><span className="material-icons">
                schedule
            </span>{props.data.s_date} - {props.data.l_date}</div>
            <div style={{ color: "black" }} className='eventPlace'><span className="material-icons" >
                place
            </span>{(props.data.place).toUpperCase()}</div>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            📒 Event Description
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">{props.data.description}</div>
                        <div className='eventLink eventDescription'><span className="material-icons">
                            link
                        </span>Link: {props.data.link === "" ? "No Link Available!" : <a href={props.data.link}>Click here!</a>}</div>
                    </div>
                </div>
            </div>


            <div className='eventFooter'>
                <div className='eventDaysLeft' style={dayCalculate(props.data.s_date) < 7 ? { backgroundColor: "red", color: "white" } : { backgroundColor: "greenyellow", color: "black" }}><span className="material-icons">
                    hourglass_top
                </span>{dayCalculate(props.data.s_date) === 0 ? 'Today' : `${dayCalculate(props.data.s_date)} Days Left`}</div>
                <div className='eventIsImportant' style={props.data.important ? { backgroundColor: "red", color: "white" } : { backgroundColor: "greenyellow", color: "black" }}><span className="material-icons">
                    priority_high
                </span>{props.data.important ? "Important" : "Not important"}</div>
                <div className='eventTotalDuration' style={{ backgroundColor: "orange", color: "black" }}><span className="material-icons">
                    timer
                </span>DURATION: {dayCalculate(props.data.l_date) - dayCalculate(props.data.s_date) + 1} Days</div>
                <div className='eventSection' style={{ backgroundColor: "lightpink", color: "black" }}><span className="material-icons">
                    door_front
                </span>SEC: {props.data.section}</div>
            </div>
        </div>
    );
}

export default Card;
