import React, { useState } from "react";
import { InputForm } from "./components/InputForm";

function App() {
  const [remainingTime, setRemainingTime] = useState<number>(0);

  const startCounting = (inputMinutes: number, inputSeconds: number) => {
    setRemainingTime(inputMinutes * 60 + inputSeconds);
    console.log(remainingTime);
  };

  return (
    <div className="App">
      <InputForm startCounting={startCounting} />
      <p>残り時間 00:00</p>
      <button>一時停止</button>
      <button>リセット</button>
    </div>
  );
}

export default App;
