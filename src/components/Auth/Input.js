import React from "react";
import "./Input.css";

const Input = (props) => {
  return (
    <div
      className={`${"control"} ${
        props.isValid === false ? "invalid" : ""
      }`}
    >
      <label htmlFor="email">{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;