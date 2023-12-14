import React, { FC, useState } from "react";
import { Button } from "./Button";
import { InputField } from "./InputField";

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
    const inputTime =
      Number(e.currentTarget[0].getAttribute("value")) * 60 +
      Number(e.currentTarget[1].getAttribute("value"));
    startCounting(inputTime);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField defaultTime={measurementTime} disabled={false} />
      <Button text="スタート" />
    </form>
  );
};
