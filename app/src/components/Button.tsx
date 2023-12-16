import React, { FC } from "react";

type Props = {
  className: string;
  text: string;
  onClick: () => void;
};

export const Button: FC<Props> = ({ className, text, onClick }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};
