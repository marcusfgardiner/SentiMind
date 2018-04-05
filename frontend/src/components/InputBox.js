import React from 'react';

const InputBox = props => {
  return <input onChange={props.handleTextBoxInput} type="text" />;
};

export default InputBox;
