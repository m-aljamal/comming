import { useEffect, useState } from "react";
import { useTimer } from "./useTimer";
const Timer = () => {
  const end = new Date("05/25/2022");
  const { dayes, hours, minutes, seconds } = useTimer(end);
  if (dayes === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    return <div>We are coming soon!</div>;
  }

  return (
    <div className="grid gap-2 sm:grid-cols-4 grid-cols-2">
      <Container>
        <p className="text-4xl">{dayes}</p>
        <span className="text-sm">Days</span>
      </Container>
      <Container>
        <p className="text-4xl">{hours}</p>
        <span className="text-sm">Hours</span>
      </Container>
      <Container>
        <p className="text-4xl">{minutes}</p>
        <span className="text-sm">Minutes</span>
      </Container>
      <Container>
        <p className="text-4xl">{seconds}</p>
        <span className="text-sm">Seconds</span>
      </Container>
    </div>
  );
};

export default Timer;

const Container = ({ children }) => {
  return (
    <div className="bg-gray-600  rounded-full w-32 h-32 flex justify-center items-center flex-col">
      {children}
    </div>
  );
};
