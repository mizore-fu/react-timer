import React, { FC } from "react";
import { Button } from "./Button";
import { InputField } from "./InputField";

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
      <InputField defaultTime={measurementTime} disabled={true} />
      {isPausing ? (
        <Button text="再開" onClick={resumeCounting} />
      ) : (
        <Button text="一時停止" onClick={pauseCounting} />
      )}
      <Button text="リセット" onClick={resetCounting} />
    </div>
  );
};
