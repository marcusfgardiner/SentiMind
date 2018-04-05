import React from 'react';
import StyledSubHeader from './styled_components/SubHeader';

const SubHeader = props => {
  return (
    <div>
      <StyledSubHeader>{props.subHeaderText}</StyledSubHeader>
    </div>
  );
};

export default SubHeader;
