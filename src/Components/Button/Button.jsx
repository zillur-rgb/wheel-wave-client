import React from "react";

const Button = ({ bg, label, border }) => {
  const text = border ? `text-${border}  font-weight-bold` : "text-white";
  return (
    <button className={`btn btn-${bg} border-${border} ${text} py-2`}>
      {label}
    </button>
  );
};

export default Button;
