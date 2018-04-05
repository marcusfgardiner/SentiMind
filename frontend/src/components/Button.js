import React from 'react';
import StyledButton from './styled_components/Button';

const Button = props => {
  return (
    <StyledButton onClick={props.handleSubmit}>{props.buttonText}</StyledButton>
  );
};

export default Button;
