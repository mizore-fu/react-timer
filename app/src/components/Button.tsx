import React, { FC } from "react";

type Props = {
  text: string;
  onClick?: () => void;
};

export const Button: FC<Props> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
