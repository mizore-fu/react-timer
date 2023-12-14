import React, { FC, useState } from "react";

type Props = {
  defaultValue: number;
  disabled: boolean;
};

export const Input: FC<Props> = ({ defaultValue, disabled }) => {
  const [value, setValue] = useState<number>(0);

  return (
    <input
      type="number"
      value={value}
      defaultValue={defaultValue}
      min={0}
      max={59}
      disabled={disabled}
      onChange={(e) => setValue(Number(e.target.value))}
    />
  );
};
