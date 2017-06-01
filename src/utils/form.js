import React from 'react';
export const intParser = value => value === undefined ? undefined : parseInt(value, 10);

export const inputField = ({children, readOnly, required, input, label, type, className, placeholder, meta: {touched, error, warning}}) => {
  return (
    <div>
      <label className="label" htmlFor="teamName">
        {label}&nbsp;
        {required && <span className="tag is-light">Required</span>}
      </label>
      {children}
      <div className="control">
        <input {...input}
          className={`${className || 'input'} ${(touched && (error || warning)) ? 'is-danger' : ''} ${(readOnly || (touched && !error && !warning))  ? 'is-success' : ''}`}
          type={type || 'text'}
          placeholder={placeholder}
          readOnly={readOnly} />
        <p className="help is-danger">
          {touched && error}
        </p>
        <p className="help is-warning">
          {touched && warning}
        </p>
      </div>
    </div>
  );
};
export const textareaField = ({children, readOnly, required, input, label, className, placeholder, meta: {touched, error, warning}}) => {
  return (
    <div>
      <label className="label" htmlFor="teamName">
        {label}&nbsp;
        {required && <span className="tag is-light">Required</span>}
      </label>
      {children}
      <div className="control">
        <textarea {...input} className={`${className || 'textarea'} ${(touched && (error || warning)) ? 'is-danger' : ''} ${(readOnly || (touched && !error && !warning)) ? 'is-success' : ''}`} placeholder={placeholder} readOnly={readOnly} />
        <p className="help is-danger">
          {touched && error}
        </p>
        <p className="help is-warning">
          {touched && warning}
        </p>
      </div>
    </div>
  );
};

export const selectField = ({children, required, input, label, type, className, placeholder, meta: {touched, error, warning}}) => {
  return (
    <div>
      <label className="label" htmlFor="teamName">
        {label}&nbsp;
        {required && <span className="tag is-light">Required</span>}
      </label>
      <p className="control">
        <span className={`select is-fullwidth ${(touched && (error || warning)) ? 'is-danger' : ''} ${(touched && !error && !warning) ? 'is-success' : ''}`}>
          <select {...input} children={children} />
        </span>
      </p>
      <p className="help is-danger">
        {touched && error}
      </p>
      <p className="help is-warning">
        {touched && warning}
      </p>
    </div>
  );
};