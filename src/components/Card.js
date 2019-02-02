import React from 'react';
import styled from 'styled-components';

const Card = ({ children, size }) => <Container size={size}>{children}</Container>;

const SIZES = {
  large: '90%',
  medium: '50%',
};

const Container = styled.View`
  background: white;
  width: ${props => (props.size ? SIZES[props.size] : 'auto')}
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 15px;
  box-shadow: 0 2px 1px rgba(33, 33, 33, 0.2);
`;

export default Card;
