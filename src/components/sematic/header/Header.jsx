import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <ul>
        <li>
          <a href="/">
            <button>Home</button>
          </a>
        </li>
        <li>
          <a href="/todo-list">
            <button>Todo list</button>
          </a>
        </li>
        <li>
          {" "}
          <a href="/register">
            <button>Register</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
