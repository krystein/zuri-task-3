import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <button
        className="m-2"
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#fff",
          width: 50,
          padding: "10px",
          border: "none",
          background:
            "linear-gradient(136.51deg, #4C7FB5 1.15%, rgba(76, 127, 181, 0) 101.51%)",
          fontWeight: "600",
        }}
      >
        <p
          style={{
            marginBottom: "0px",
          }}
        >
          {value}
        </p>
      </button>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
