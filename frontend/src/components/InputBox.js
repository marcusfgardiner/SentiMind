import React from 'react';

const InputBox = props => {
  return <input onChange={props.handleQueryInput} type="text" />;
};

export default InputBox;
