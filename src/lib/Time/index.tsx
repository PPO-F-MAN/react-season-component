import React from 'react';
import * as Styled from './styled';

interface TimeProps {
  children: React.ReactNode;
}

function Time({ children }: TimeProps) {
  return <Styled.Container>{children}</Styled.Container>;
}

export default Time;
