import React from 'react';
import styled from 'styled-components';

const Error = ({ title, details }) => (
  <ErrorContainer>
    <ErrorText>💩 Oops. {title}</ErrorText>
    <ErrorText>{details}</ErrorText>
  </ErrorContainer>
);

const ErrorContainer = styled.View`
  background-color: white;
  padding: 10px;
  border: 2px solid red;
  margin: 10px;
`;

const ErrorText = styled.Text`
  color: red;
  padding-top: 10px;
  font-size: 14px;
`;

export default Error;
