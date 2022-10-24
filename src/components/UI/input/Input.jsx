import React, { useState } from "react";
import { BiShowAlt } from "react-icons/bi";
import { BsEyeSlashFill } from "react-icons/bs";
import { InputStyles } from "../../../styles/InputStyles";

const Input = ({ className, type, id, name, value, onChange }) => {
  const [viewPassword, setViewPassword] = useState(true);

  const viewPasswordChange = () => {
    setViewPassword((prevState) => (prevState = !prevState));
  };

  return (
    <>
      {type === "password" ? (
        <InputStyles className={className}>
          <input type={viewPassword ? "password" : "text"} />
          {viewPassword ? (
            <button onClick={viewPasswordChange}>
              <BsEyeSlashFill />
            </button>
          ) : (
            <button onClick={viewPasswordChange}>
              <BiShowAlt />
            </button>
          )}
        </InputStyles>
      ) : (
        <input
          className={className}
          type={type || "text"}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </>
  );
};

export default Input;
