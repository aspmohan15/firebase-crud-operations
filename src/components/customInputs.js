import React from "react";

const CustomInputs = ({
  key,
  type,
  id,
  name,
  className,
  value,
  onChange,
  placeHolder,
}) => {
  return (
    <div style={{ padding: "20px" }}>
      <input
        type={type}
        id={id}
        className={className}
        value={value}
        onChange={onChange}
        key={key}
        name={name}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default CustomInputs;
