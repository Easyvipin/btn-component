import React, { useRef, useEffect } from "react";

const Button = ({
  disabled = false,
  startIcon = false,
  endIcon = false,
  autofocus = false,
  ...props
}) => {
  const btn = useRef(null);
  useEffect(() => {
    if (autofocus === true && btn.current) {
      btn.current.focus();
    }
  }, [autofocus, disabled]);
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
    <button
      ref={btn}
      className={formClassNames}
      disabled={disabled}
      autoFocus={autofocus}
    >
      {startIcon || endIcon ? renderContent() : "Default"}
    </button>
  );
};

export default Button;
