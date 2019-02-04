import React from 'react';
import styled from 'styled-components';

const Button = ({
  onPress, title, children, primary, disabled, ...restOfProps
}) => {
  const onPressHanlder = disabled ? undefined : onPress;
  const activeOpacity = disabled ? 1 : 0.2;
  const ButtonContainer = primary ? PrimaryButtonContainer : SecondaryButtonContainer;
  return (
    <ButtonContainer activeOpacity={activeOpacity} onPress={onPressHanlder} {...restOfProps}>
      {title ? <ButtonText>{title}</ButtonText> : children}
    </ButtonContainer>
  );
};

export const PrimaryButton = props => <Button primary {...props} />;
export const SecondaryButton = props => <Button {...props} />;

const SIZES = {
  large: '90%',
  medium: '50%',
};

const CustomButton = styled.TouchableOpacity`
  width: ${props => (props.size ? SIZES[props.size] : 'auto')}
  justify-content: center;
  align-items: stretch;
  padding: 0 20px;
  margin: 6px 12px;
  height: 50px;
  border-radius: 10px;
`;

const PrimaryButtonContainer = styled(CustomButton)`
  background-color: steelblue;
`;

const SecondaryButtonContainer = styled(CustomButton)`
  background-color: #db2763;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto';
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 20px;
  text-align: center;
`;
