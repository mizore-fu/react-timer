import React, { FC } from "react";
import { ResumeButton } from "./ResumeButton";
import { PauseButton } from "./PauseButton";

type Props = {
  isPausing: boolean;
  measurementTime: number;
  pauseCounting: () => void;
  resumeCounting: () => void;
  resetCounting: () => void;
};

export const StopButtons: FC<Props> = ({
  isPausing,
  measurementTime,
  pauseCounting,
  resumeCounting,
  resetCounting,
}) => {
  const handlePause = () => {
    pauseCounting();
  };

  const handleResume = () => {
    resumeCounting();
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
