import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

export const PrimaryButton = ({ onPress, title, ...restOfProps }) => (
  <CustomButton onPress={onPress} {...restOfProps}>
    <ButtonText>{title}</ButtonText>
  </CustomButton>
);

const CustomButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: stretch;
  background-color: steelblue;
  padding: 0 20px;
  margin: 6px 12px;
  height: 50px;
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  font-family: 'Roboto';
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 20px;
  text-align: center;
`;
