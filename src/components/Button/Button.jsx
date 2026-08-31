import React from "react";
import "./button.scss";

export default function Button({ dark, link, text }) {
  return (
    <React.Fragment>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`button ${dark ? "button--dark" : ""}`}
      >
        {text}
      </a>
    </React.Fragment>
  );
}
