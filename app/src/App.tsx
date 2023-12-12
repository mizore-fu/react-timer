import React, { useEffect, useState } from "react";
import { InputForm } from "./components/InputForm";
import { StopButtons } from "./components/StopButtons";

function App() {
  const [isCounting, setCounting] = useState<boolean>(false);
  const [measurementTime, setMeasurementTime] = useState<number>(0);
  const [remainingTime, setRemainingTime] = useState<number>(0);

  const startCounting = (inputTime: number) => {
    setMeasurementTime(inputTime);
    setRemainingTime(inputTime);
    setCounting(true);
  };

  const resetCounting = () => {
    setCounting(false);
    setRemainingTime(0);
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
      {isCounting ? (
        <StopButtons
          measurementTime={measurementTime}
          resetCounting={resetCounting}
        />
      ) : (
        <InputForm
          measurementTime={measurementTime}
          startCounting={startCounting}
        />
      )}
      <p>
        残り時間 {Math.floor(remainingTime / 60)}:{remainingTime % 60}
      </p>
    </div>
  );
}

export default App;
