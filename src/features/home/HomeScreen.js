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
        <Logo>Githubber</Logo>
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

const Logo = styled(Heading1)`
  padding: 10px;
`;

export default HomeScreen;
