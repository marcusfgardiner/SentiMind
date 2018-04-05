import React from 'react';
import SubHeader from './SubHeader';
import InputBox from './InputBox';
import Button from './Button';

const InputView = props => {
  return (
    <div>
      <SubHeader subHeaderText="Type in a topic, find out what the twitterverse thinks" />
      <InputBox handleQueryInput={props.handleQueryInput} />
      <Button buttonText="Go!" handleSubmit={props.handleSubmit} />
    </div>
  );
};

export default InputView;
