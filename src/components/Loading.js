import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components';

const Loading = ({ backgroundColor }) => (
  <LoadingContainer backgroundColor={backgroundColor}>
    <ActivityIndicator size="large" color="steelblue" />
  </LoadingContainer>
);

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'powderblue')};
`;

export default Loading;
