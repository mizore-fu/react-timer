import React, { useState } from "react";
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

  return (
    <div className="App">
      {isCounting ? (
        <StopButtons measurementTime={measurementTime} />
      ) : (
        <InputForm startCounting={startCounting} />
      )}
      <p>
        残り時間 {Math.floor(remainingTime / 60)}:{remainingTime % 60}
      </p>
    </div>
  );
}

export default App;
