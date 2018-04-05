import React from 'react';
import StyledInputBox from './styled_components/InputBox';

const InputBox = props => {
  return (
    <StyledInputBox
      id="input-box"
      onChange={props.handleQueryInput}
      type="text"
    />
  );
};

export default InputBox;
