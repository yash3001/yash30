import React from "react";
import "./button.scss";

export default function Button({ dark, link, text }) {
  return (
    <React.Fragment>
      <a
        href={link}
        target="_blank"
        className={`button ${dark ? "button--dark" : ""}`}
        onClick="location.href = 'www.google.com'"
      >
        {text}
      </a>
    </React.Fragment>
  );
}
