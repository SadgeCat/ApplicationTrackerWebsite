import { useState, useEffect } from "react";

const Card = ({card, cardID, toggleEdit}) => {

    const getTimeRemaining = (dline) => {
        const now = new Date();
        const target = dline;
        const diff = target.getTime() - now.getTime();

        if (diff <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((diff % (1000 * 60)) / 1000)
        };
    }

    const [timeLeft, setTimeLeft] = useState(getTimeRemaining(card.deadline));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeRemaining(card.deadline));
        }, 1000);

        return () => clearInterval(interval);
    }, [card.deadline])
    
    return (
        <div className="card">
            <div className="card-header">
                <h3>{card.title}</h3>
            </div>
            <div className="card-body">
                <p><strong>Deadline:</strong> {card.deadline.toLocaleDateString()}</p>
                <p><strong>Time Remaining:</strong> {`${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes, ${timeLeft.seconds} seconds.`} </p>
                <p><strong>Status:</strong> {card.status}</p>
            </div>
            <div className="edit-card">
                <button onClick={toggleEdit}>Edit</button>
            </div>
        </div>
    );
}

export default Card;