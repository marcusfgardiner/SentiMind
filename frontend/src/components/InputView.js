import React from 'react';
import SubHeader from './SubHeader';
import InputBox from './InputBox';
import Button from './Button';

const InputView = props => {
 return (
   <div>
     <SubHeader />
     <InputBox handleQueryInput={props.handleQueryInput} />
     <Button handleSubmit={props.handleSubmit} />
   </div>
 )
}

export default InputView
