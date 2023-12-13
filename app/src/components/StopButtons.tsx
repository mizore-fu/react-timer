import React, { FC, useState } from "react";
import { ResumeButton } from "./ResumeButton";
import { PauseButton } from "./PauseButton";

type Props = {
  measurementTime: number;
  resetCounting: () => void;
};

export const StopButtons: FC<Props> = ({ measurementTime, resetCounting }) => {
  const [isPausing, setPausing] = useState<boolean>(false);

  const handlePause = () => {
    setPausing(true);
  };

  const handleResume = () => {
    setPausing(false);
  };

  return (
    <div>
      計測時間
      <input
        type="number"
        defaultValue={Math.floor(measurementTime / 60)}
        disabled
      />
      分
      <input type="number" defaultValue={measurementTime % 60} disabled />秒
      {isPausing ? (
        <ResumeButton handleResume={handleResume} />
      ) : (
        <PauseButton handlePause={handlePause} />
      )}
      <button onClick={resetCounting}>リセット</button>
    </div>
  );
};
