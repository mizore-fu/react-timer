import React, { useEffect, useState } from "react";
import { TIMER_STATUS_MAP } from "./constants";
import { InputField } from "./components/InputField";
import { ControlButtons } from "./components/ControlButtons";

function App() {
  const [timerStatus, setTimerStatus] = useState<number>(
    TIMER_STATUS_MAP["setting"]
  );
  const [isCounting, setCounting] = useState<boolean>(false);
  const [inputMinutes, setInputMinutes] = useState<number>(0);
  const [inputSeconds, setInputSeconds] = useState<number>(0);
  const [remainingTime, setRemainingTime] = useState<number>(0);

  useEffect(() => {
    if (remainingTime === 0) {
      return;
    }
    if (isCounting) {
      const id = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
        clearInterval(id);
      }, 1000);
      return () => clearInterval(id);
    }
  }, [remainingTime, isCounting]);

  const convertToTwoDisits = (num: number) => {
    if (num > 9) return String(num);
    return `0${String(num)}`;
  };

  const transformIntoDisplayedTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${convertToTwoDisits(minutes)}:${convertToTwoDisits(seconds)}`;
  };

  return (
    <div className="App">
      <InputField
        setInputMinutes={setInputMinutes}
        setInputSeconds={setInputSeconds}
        disabled={timerStatus !== TIMER_STATUS_MAP["setting"]}
      />
      <ControlButtons
        timerStatus={timerStatus}
        inputTime={inputMinutes * 60 + inputSeconds}
        setTimerStatus={setTimerStatus}
        setCounting={setCounting}
        setRemainingTime={setRemainingTime}
      />
      <p>残り時間 {transformIntoDisplayedTime(remainingTime)}</p>
    </div>
  );
}

export default App;
