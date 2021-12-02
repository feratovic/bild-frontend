import React, {useEffect, useState} from 'react';

export const CustomInput = ({
  name,
  onChange,
  value,
  className,
  placeholder,
  disabled,
  required,
  validate,
  type,
}) => {
  return (
    <div className="form-group mb-3">
      <input
        type={type || 'text'}
        className={`form-control  ${required && ' is-invalid '}  ${className} `}
        id={name}
        aria-describedby="emailHelp"
        placeholder={placeholder || 'Enter text'}
        onChange={(e) => onChange(e, name)}
        name={name}
        value={value}
      />
    </div>
  );
};

export const CustomTextArea = ({
  name,
  onChange,
  value,
  className,
  placeholder,
  disabled,
  required,
  validate,
  maxlength,
}) => {
  return (
    <div className="form-group">
      <textarea
        value={value}
        name={name}
        onChange={(e) => onChange(e, name)}
        className={`form-control  ${required && ' is-invalid '}  ${className}`}
        rows="10"
        maxLength={maxlength || 1000}
      ></textarea>
    </div>
  );
};
