import React from 'react';
import StyledButton from './styled_components/Button';

const Button = props => {
  return (
    <StyledButton id="btn" onClick={props.handleSubmit}>
      <p id="text">{props.buttonText}</p>
    </StyledButton>
  );
};

export default Button;
