import React from 'react';
import styled from 'styled-components';

const Heading1 = ({ children }) => <H1>{children}</H1>;
const Heading2 = ({ children }) => <H2>{children}</H2>;
const Heading3 = ({ children }) => <H3>{children}</H3>;

const Heading = styled.Text`
  font-family: 'Roboto';
  font-weight: bold;
  color: black;
  font-size: 20px;
`;

const H1 = styled(Heading)`
  font-size: 50;
  text-align: center;
`;

const H2 = styled(Heading)`
  font-size: 40;
`;

const H3 = styled(Heading)`
  font-size: 24;
`;

export { Heading1, Heading2, Heading3 };
