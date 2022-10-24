import React from "react";

const Button = ({ children, className, onClick, dataValue, setDataValue }) => {
  return (
    <button
      className={className}
      onClick={() => onClick(dataValue, setDataValue)}
    >
      {children}
    </button>
  );
};

export default Button;
