import React from 'react';
import { StyleSheet, Text } from 'react-native';
import styled from 'styled-components';

const Heading1 = ({ children }) => <H1>{children}</H1>;
const Heading2 = ({ children }) => <H2>{children}</H2>;

const Heading = styled.Text`
  font-family: 'Roboto';
  font-weight: bold;
  color: black;
  padding-right: 10;
  padding-left: 10;
  font-size: 20;
`;

const H1 = styled(Heading)`
  font-size: 50;
`;

const H2 = styled(Heading)`
  font-size: 40;
`;

export { Heading1, Heading2 };
