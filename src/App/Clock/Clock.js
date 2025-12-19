import useCurrentDate from "../useCurrentDate";
import "./style.css";

const Clock = () => {
  const date = useCurrentDate();

  return (
    <div className="clockContainer">
      CLOCK JEST RENDEROWANY: {date.toLocaleTimeString()}
    </div>
  );
};

export default Clock;