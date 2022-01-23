import React from "react";

const Button = ({
  disabled = false,
  startIcon = false,
  endIcon = false,
  ...props
}) => {
  const formClassNames = Object.keys(props)
    .map((properties) => props[`${properties}`])
    .join(" ");

  const renderContent = (text = "default") => {
    if (endIcon) {
      return (
        <>
          {text} <i className={endIcon}></i>
        </>
      );
    } else {
      return (
        <>
          <i className={startIcon}></i> {text}
        </>
      );
    }
  };
  return (
    <button className={formClassNames} disabled>
      {startIcon || endIcon ? renderContent() : "Default"}
    </button>
  );
};

export default Button;
