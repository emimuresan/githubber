import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components';
import { Heading1 } from '../../components/Headings';

const StyledView = styled.View`
  background-color: powderblue;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <StyledView>
        <Heading1>Githubber</Heading1>
      </StyledView>
    );
  }
}

export default HomeScreen;
