import React from 'react';

const Button = props => {
  return <button onClick={props.handleSubmit}>{props.buttonText}</button>;
};

export default Button;
