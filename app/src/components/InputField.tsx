import React, { FC } from "react";
import { Input } from "./Input";

type Props = {
  disabled: boolean;
  setInputMinutes: React.Dispatch<React.SetStateAction<number>>;
  setInputSeconds: React.Dispatch<React.SetStateAction<number>>;
};

export const InputField: FC<Props> = ({
  disabled,
  setInputMinutes,
  setInputSeconds,
}) => {
  return (
    <div>
      計測時間
      <Input disabled={disabled} setTime={setInputMinutes} />
      分
      <Input disabled={disabled} setTime={setInputSeconds} />秒
    </div>
  );
};
