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

  const calcInputTime = () => {
    return inputMinutes * 60 + inputSeconds;
  };

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

  return (
    <div className="App">
      <InputField
        setInputMinutes={setInputMinutes}
        setInputSeconds={setInputSeconds}
        disabled={timerStatus !== TIMER_STATUS_MAP["setting"]}
      />
      <ControlButtons
        timerStatus={timerStatus}
        setTimerStatus={setTimerStatus}
        setCounting={setCounting}
        setRemainingTime={setRemainingTime}
        calcInputTime={calcInputTime}
      />
      <p>
        残り時間 {Math.floor(remainingTime / 60)}:{remainingTime % 60}
      </p>
    </div>
  );
}

export default App;
