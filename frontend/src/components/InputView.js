import React from 'react';
import SubHeader from './SubHeader';
import InputBox from './InputBox';
import Button from './Button';

const InputView = props => {
  return (
    <div id="input">
      <SubHeader subHeaderText="Type in a topic, find out what the twitter-verse thinks" />
      <InputBox handleQueryInput={props.handleQueryInput} />
      <br />
      <Button
        buttonText="Click to find out!"
        handleSubmit={props.handleSubmit}
      />
    </div>
  );
};

export default InputView;
