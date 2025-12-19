import useCurrentDate from "../useCurrentDate";
import "./style.css";

const Clock = () => {
    const date = useCurrentDate();
    const options = {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    };

    return (
        <div className="clock-container">
            Dzisiaj jest {date.toLocaleDateString('pl-PL', options)} {date.toLocaleTimeString()}
        </div>
    );
};

export default Clock;