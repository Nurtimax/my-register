import React, { useState } from "react";
import Button from "../UI/button/Button";
import classes from "./Lists.module.css";
import ListsItems from "./ListsItems";

const Lists = ({ postDataUserValue }) => {
  const [dataValue, setDataValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const changeDataValueName = (e) => {
    setDataValue((prevState) => ({ ...prevState, name: e.target.value }));
  };
  const changeDataValueEmail = (e) => {
    setDataValue((prevState) => ({ ...prevState, email: e.target.value }));
  };
  const changeDataValuePassword = (e) => {
    setDataValue((prevState) => ({ ...prevState, password: e.target.value }));
  };
  const changeDataValueConfirmPassword = (e) => {
    setDataValue((prevState) => ({
      ...prevState,
      confirmPassword: e.target.value,
    }));
  };
  const changeDataValueGender = (e) => {
    setDataValue((prevState) => ({ ...prevState, gender: e.target.value }));
  };

  return (
    <div className={classes.Lists}>
      <ListsItems
        input={classes.input}
        id="name"
        htmlFor={"name"}
        value={dataValue.name}
        onChange={changeDataValueName}
        name="name"
      >
        Name
      </ListsItems>

      <ListsItems
        input={classes.input}
        id="email"
        htmlFor={"email"}
        value={dataValue.email}
        onChange={changeDataValueEmail}
        name="email"
      >
        Email
      </ListsItems>

      <ListsItems
        input={classes.input}
        id="password"
        type="password"
        htmlFor={"password"}
        value={dataValue.password}
        onChange={changeDataValuePassword}
        name="password"
      >
        Password
      </ListsItems>

      <ListsItems
        input={classes.input}
        type="password"
        id="confirmPassword"
        htmlFor={"confirmPassword"}
        value={dataValue.confirmPassword}
        onChange={changeDataValueConfirmPassword}
        name="confirmPassword"
      >
        ConfirmPassword
      </ListsItems>
      <ListsItems
        input={classes.input}
        type="radio"
        id="male"
        name="gender"
        value={"male"}
        onChange={changeDataValueGender}
      >
        Male
      </ListsItems>

      <ListsItems
        input={classes.input}
        type="radio"
        id="female"
        name="gender"
        value={"female"}
        onChange={changeDataValueGender}
      >
        Female
      </ListsItems>

      <Button
        className={classes.Button}
        onClick={postDataUserValue}
        dataValue={dataValue}
        setDataValue={setDataValue}
      >
        Button
      </Button>
    </div>
  );
};

export default Lists;
