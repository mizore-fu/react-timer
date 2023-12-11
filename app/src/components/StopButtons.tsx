import React, { FC } from "react";

type Props = {
  measurementTime: number;
};

export const StopButtons: FC<Props> = ({ measurementTime }) => {
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
      <button>一時停止</button>
      <button>リセット</button>
    </div>
  );
};
