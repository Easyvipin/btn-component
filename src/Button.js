import React from "react";

const Button = ({ disabled = false, ...props }) => {
  const formClassNames = Object.keys(props)
    .map((properties) => props[`${properties}`])
    .join(" ");
  return (
    <button className={formClassNames} disabled>
      Default
    </button>
  );
};

export default Button;
