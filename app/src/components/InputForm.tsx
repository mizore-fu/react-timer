import React, { FC, useState } from "react";
import { Button } from "./Button";

type Props = {
  measurementTime: number;
  startCounting: (inputTime: number) => void;
};

export const InputForm: FC<Props> = ({ measurementTime, startCounting }) => {
  const [inputMinutes, setInputMinutes] = useState<number>(
    Math.floor(measurementTime / 60)
  );
  const [inputSeconds, setInputSeconds] = useState<number>(
    measurementTime % 60
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputTime = inputMinutes * 60 + inputSeconds;
    startCounting(inputTime);
  };

  return (
    <form onSubmit={handleSubmit}>
      計測時間
      <input
        type="number"
        value={inputMinutes}
        onChange={(e) => setInputMinutes(Number(e.target.value))}
      />
      分
      <input
        type="number"
        value={inputSeconds}
        onChange={(e) => setInputSeconds(Number(e.target.value))}
      />
      秒
      <Button text="スタート" />
    </form>
  );
};
