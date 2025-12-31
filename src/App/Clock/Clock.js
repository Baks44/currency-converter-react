import useCurrentDate from "../useCurrentDate";
import { ClockWrapper } from "./styled";


const Clock = () => {
    const date = useCurrentDate();
    const options = {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    };

    const formattedTime
        = date.toLocaleDateString(undefined, options)
        + " " + date.toLocaleTimeString();

    return (
        <ClockWrapper>
            Dzisiaj jest {formattedTime}
        </ClockWrapper>
    );

};

export default Clock;