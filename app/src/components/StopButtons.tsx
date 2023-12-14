import React, { FC } from "react";
import { Button } from "./Button";

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
        <Button text="再開" onClick={resumeCounting} />
      ) : (
        <Button text="一時停止" onClick={pauseCounting} />
      )}
      <Button text="リセット" onClick={resetCounting} />
    </div>
  );
};
