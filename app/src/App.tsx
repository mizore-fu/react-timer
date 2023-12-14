import React, { useEffect, useState } from "react";
import { TIMER_STATUS_MAP } from "./constants";
import { InputField } from "./components/InputField";
import { Button } from "./components/Button";

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

  const timerController = (timerStatus: number) => {
    switch (timerStatus) {
      case TIMER_STATUS_MAP["setting"]:
        return (
          <div>
            <InputField defaultTime={measurementTime} disabled={false} />
            <Button
              text="スタート"
              onClick={() => setTimerStatus(TIMER_STATUS_MAP["counting"])}
            />
          </div>
        );
      case TIMER_STATUS_MAP["counting"]:
        return (
          <div>
            <InputField defaultTime={measurementTime} disabled={true} />
            <Button text="一時停止" onClick={pauseCounting} />
            <Button text="リセット" onClick={resetCounting} />
          </div>
        );
      case TIMER_STATUS_MAP["pausing"]:
        return (
          <div>
            <InputField defaultTime={measurementTime} disabled={true} />
            <Button text="再開" onClick={resumeCounting} />
            <Button text="リセット" onClick={resetCounting} />
          </div>
        );
    }
  };

  return (
    <div className="App">
      {timerController(timerStatus)}
      <p>
        残り時間 {Math.floor(remainingTime / 60)}:{remainingTime % 60}
      </p>
    </div>
  );
}

export default App;
