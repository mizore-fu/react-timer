import React, { FC } from "react";
import { TIMER_STATUS_MAP } from "../constants";
import { Button } from "./Button";

type Props = {
  timerStatus: number;
  inputTime: number;
  setTimerStatus: React.Dispatch<React.SetStateAction<number>>;
  setCounting: React.Dispatch<React.SetStateAction<boolean>>;
  setRemainingTime: React.Dispatch<React.SetStateAction<number>>;
};

export const ControlButtons: FC<Props> = ({
  timerStatus,
  inputTime,
  setTimerStatus,
  setCounting,
  setRemainingTime,
}) => {
  const startCounting = () => {
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

  switch (timerStatus) {
    case TIMER_STATUS_MAP["counting"]:
      return (
        <div className="buttons">
          <Button
            className="button--level2"
            text="一時停止"
            onClick={pauseCounting}
          />
          <Button
            className="button--level2"
            text="リセット"
            onClick={resetCounting}
          />
        </div>
      );
    case TIMER_STATUS_MAP["pausing"]:
      return (
        <div className="buttons">
          <Button
            className="button--level1"
            text="再開"
            onClick={resumeCounting}
          />
          <Button
            className="button--level2"
            text="リセット"
            onClick={resetCounting}
          />
        </div>
      );
    default:
      return (
        <div className="buttons">
          <Button
            className="button--level1"
            text="スタート"
            onClick={startCounting}
          />
        </div>
      );
  }
};
