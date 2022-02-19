import React from 'react';
import * as Styled from './styled';

interface SeasonProps {
  children: React.ReactNode;
}

function Season({ children }: SeasonProps) {
  return <Styled.Container>{children}</Styled.Container>;
}

export default Season;
