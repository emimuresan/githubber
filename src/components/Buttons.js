import React from 'react';
import styled from 'styled-components';

export const PrimaryButton = ({
  onPress, title, children, ...restOfProps
}) => (
  <CustomButton onPress={onPress} {...restOfProps}>
    {title ? <ButtonText>{title}</ButtonText> : children}
  </CustomButton>
);

const SIZES = {
  large: '90%',
  medium: '50%',
};

const CustomButton = styled.TouchableOpacity`
  width: ${props => (props.size ? SIZES[props.size] : 'auto')}
  justify-content: center;
  align-items: stretch;
  background-color: steelblue;
  padding: 0 20px;
  margin: 6px 12px;
  height: 50px;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto';
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 20px;
  text-align: center;
`;
