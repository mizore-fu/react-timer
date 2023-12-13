import React, { FC } from "react";

type Props = {
  handleResume: () => void;
};

export const ResumeButton: FC<Props> = ({ handleResume }) => {
  return <button onClick={handleResume}>再開</button>;
};
