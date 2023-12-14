import React, { FC, useState } from "react";

type Props = {
  disabled: boolean;
  setTime: React.Dispatch<React.SetStateAction<number>>;
};

export const Input: FC<Props> = ({ disabled, setTime }) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
    setTime(Number(e.target.value));
  };

  return (
    <input
      type="number"
      value={value}
      min={0}
      max={59}
      disabled={disabled}
      onChange={handleChange}
    />
  );
};
