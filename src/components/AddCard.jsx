import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const PickDateComponent = ({ selectedDate, setSelectedDate }) => {
    return (
        <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="Select a date and time"
        />
    );
};

const AddCard = ({dosmthtocard, mode, cardID, card}) => {
    const [selectedDate, setSelectedDate] = useState(card?.deadline || new Date());
    const [title, setTitle] = useState(card?.title || "");
    const [status, setStatus] = useState(card?.status || "");

    const swtch = mode === "add" ? true : false;
    const h2Text = swtch ? "Add New Application" : "Edit Application";
    const titleText = swtch ? "Title:" : "Edit Title:";
    const statusText = swtch ? "Status:" : "Edit Status:";
    const btnText = swtch ? "Add" : "Edit";

    return (
        <div className="add-card">
            <h2>{h2Text}</h2>
            
            <div className="input-group">
                <label>{titleText}
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </label>
            </div>

            <div className="input-group">
                <label>Deadline:
                    <PickDateComponent
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}/>
                </label>
            </div>

            <div className="input-group">
                <label>{statusText}
                    <input type="text" value={status} onChange={(e) => setStatus(e.target.value)}/>
                </label>
            </div>

            <button id="add-button" onClick={() => dosmthtocard(cardID, title, selectedDate, status)}>{btnText}</button>
        </div>
    );
};

export default AddCard;