import React from 'react';
import StyledSubHeader from './styled_components/SubHeader';

const SubHeader = props => {
  return (
    <div>
      <StyledSubHeader>
        <p id="subheader">{props.subHeaderText}</p>
      </StyledSubHeader>
    </div>
  );
};

export default SubHeader;
