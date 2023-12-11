import React, { FC, useState } from "react";

type Props = {
  startCounting: (inputTime: number) => void;
};

export const InputForm: FC<Props> = ({ startCounting }) => {
  const [inputSeconds, setInputSeconds] = useState<number>(0);
  const [inputMinutes, setInputMinutes] = useState<number>(0);

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
      秒<button>スタート</button>
    </form>
  );
};
