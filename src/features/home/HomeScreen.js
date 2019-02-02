import React from 'react';
import styled from 'styled-components';
import { Heading1 } from '../../components/Headings';
import { PrimaryButton } from '../../components/Buttons';
import routes from '../../navigation/routes';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <StyledView>
        <Heading1>Githubber</Heading1>
        <PrimaryButton
          title="Most Popular Repos"
          onPress={() => this.props.navigation.navigate(routes.REPO_SELECTION)}
        />
      </StyledView>
    );
  }
}

const StyledView = styled.View`
  background-color: powderblue;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

export default HomeScreen;
