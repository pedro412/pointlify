import React from 'react';
import '../Input/Input.css';

const Input = ({ label, name, type, onChange, disabled }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
