import React, { useEffect, useState } from "react";
import { InputForm } from "./components/InputForm";
import { StopButtons } from "./components/StopButtons";
import { TIMER_STATUS_MAP } from "./constants";

function App() {
  const [timerStatus, setTimerStatus] = useState<number>(
    TIMER_STATUS_MAP["setting"]
  );
  const [isCounting, setCounting] = useState<boolean>(false);
  const [measurementTime, setMeasurementTime] = useState<number>(0);
  const [remainingTime, setRemainingTime] = useState<number>(0);

  const startCounting = (inputTime: number) => {
    setMeasurementTime(inputTime);
    setRemainingTime(inputTime);
    setCounting(true);
    setTimerStatus(TIMER_STATUS_MAP["counting"]);
  };

  const pauseCounting = () => {
    setCounting(false);
    setTimerStatus(TIMER_STATUS_MAP["pausing"]);
  };

  const resumeCounting = () => {
    setCounting(true);
    setTimerStatus(TIMER_STATUS_MAP["counting"]);
  };

  const resetCounting = () => {
    setRemainingTime(0);
    setCounting(false);
    setTimerStatus(TIMER_STATUS_MAP["setting"]);
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

  const timerController = () => {
    switch (timerStatus) {
      case TIMER_STATUS_MAP["setting"]:
        return (
          <InputForm
            measurementTime={measurementTime}
            startCounting={startCounting}
          />
        );
      case TIMER_STATUS_MAP["counting"]:
        return (
          <StopButtons
            isPausing={false}
            measurementTime={measurementTime}
            pauseCounting={pauseCounting}
            resumeCounting={resumeCounting}
            resetCounting={resetCounting}
          />
        );
      case TIMER_STATUS_MAP["pausing"]:
        return (
          <StopButtons
            isPausing={true}
            measurementTime={measurementTime}
            pauseCounting={pauseCounting}
            resumeCounting={resumeCounting}
            resetCounting={resetCounting}
          />
        );
    }
  };

  return (
    <div className="App">
      {timerController()}
      <p>
        残り時間 {Math.floor(remainingTime / 60)}:{remainingTime % 60}
      </p>
    </div>
  );
}

export default App;
