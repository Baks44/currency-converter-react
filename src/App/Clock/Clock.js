import { useEffect, useState } from "react";

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="clock">
            {time.toLocaleDateString("pl-PL", {
                day: "numeric",
                month: "long",
                year: "numeric",
            })}
            {" | "}
            {time.toLocaleTimeString("pl-PL", {
                hour: "2-digit",
                minute: "2-digit",
            })}
        </div>
    );
}


export default Clock;