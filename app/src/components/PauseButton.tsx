import React, { FC } from "react";

type Props = {
  handlePause: () => void;
};

export const PauseButton: FC<Props> = ({ handlePause }) => {
  return <button onClick={handlePause}>一時停止</button>;
};
