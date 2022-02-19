import React from 'react';
import * as Styled from './styled';

interface WeatherProps {
  children: React.ReactNode;
}

function Weather({ children }: WeatherProps) {
  return <Styled.Container>{children}</Styled.Container>;
}

export default Weather;
