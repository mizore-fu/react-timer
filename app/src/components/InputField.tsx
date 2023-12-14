import React, { FC } from "react";
import { Input } from "./Input";

type Props = {
  defaultTime: number;
  disabled: boolean;
};

export const InputField: FC<Props> = ({ defaultTime, disabled }) => {
  return (
    <div>
      計測時間
      <Input defaultValue={Math.floor(defaultTime / 60)} disabled={disabled} />
      分
      <Input defaultValue={defaultTime % 60} disabled={disabled} />秒
    </div>
  );
};
