import { useEffect, useState } from "react";
import { useTimer } from "./useTimer";
const Timer = () => {
  const end = new Date("05/25/2022");
  const { dayes, hours, minutes, seconds } = useTimer(end);
  if (dayes === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    return <div>We are coming soon!</div>;
  }

  return (
    <div className="flex gap-10">
      <div className="box">
        <p id="day" className="">
          {dayes}
        </p>
        <span className="text">Days</span>
      </div>

      <div className="box">
        <p id="hour">{hours}</p>
        <span className="text">Hours</span>
      </div>

      <div className="box">
        <p id="minute">{minutes}</p>
        <span className="text">Minutes</span>
      </div>

      <div className="box">
        <p id="second">{seconds}</p>
        <span className="text">Seconds</span>
      </div>
    </div>
  );
};

export default Timer;
