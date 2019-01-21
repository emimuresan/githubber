import React from 'react';
import { StyleSheet, Text } from 'react-native';
import styled from 'styled-components';

const Heading1 = ({ children }) => <H1>{children}</H1>;
const Heading2 = ({ children }) => <H2>{children}</H2>;

const Heading = styled.Text`
  font-family: 'Roboto';
  font-weight: bold;
  color: black;
  padding: 10px;
  font-size: 20px;
`;

const H1 = styled(Heading)`
  font-size: 50;
  text-align: center;
`;

const H2 = styled(Heading)`
  font-size: 40;
`;

export { Heading1, Heading2 };
