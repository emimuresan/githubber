import React from 'react';
import { PickerIOS, Picker as PickerAndroid, Platform } from 'react-native';
import styled from 'styled-components';
import { ApolloConsumer, Query } from 'react-apollo';
import LANGUAGES from '../../data/programmingLanguages';
import routes from '../../navigation/routes';
import { GET_LANGUAGE, SET_LANGUAGE } from './operations';
import { PrimaryButton } from '../../components/Buttons';
import Card from '../../components/Card';

const Picker = Platform.select({
  ios: PickerIOS,
  android: PickerAndroid,
});

const SelectLanguage = ({ selectedLanguage }) => (
  <ApolloConsumer>
    {client => (
      <StyledPicker
        selectedValue={selectedLanguage}
        onValueChange={(newValue) => {
          client.mutate({
            mutation: SET_LANGUAGE,
            variables: { language: newValue },
          });
        }}
        itemStyle={{ fontSize: 28 }}
      >
        {Object.keys(LANGUAGES).map(key => (
          <StyledPicker.Item label={LANGUAGES[key]} key={key} value={key} />
        ))}
      </StyledPicker>
    )}
  </ApolloConsumer>
);

export default class RepoSelectionScreen extends React.Component {
  static navigationOptions = {
    title: 'Select Language',
  };

  handlePress = (languageKey) => {
    this.props.navigation.navigate(routes.REPO_LIST, {
      selectedLanguage: LANGUAGES[languageKey],
    });
  };

  render() {
    return (
      <Query query={GET_LANGUAGE}>
        {({ data: { language } }) => (
          <Container>
            <Card size="large">
              <DescriptionText>
                Below is a list with the most commonly used languages on Github right now (by number
                of pull requests).
              </DescriptionText>

              <SelectLanguage selectedLanguage={language.value} />
            </Card>

            <PrimaryButton onPress={() => this.handlePress(language.value)} size="large">
              <ButtonText>
                👉 Go to most popular <BoldText>{LANGUAGES[language.value]}</BoldText> repos
              </ButtonText>
            </PrimaryButton>
          </Container>
        )}
      </Query>
    );
  }
}

const Container = styled.View`
  background-color: powderblue;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const DescriptionText = styled.Text`
  margin-bottom: 15px;
  text-align: center;
`;

const StyledPicker = styled(Picker)`
  width: 100%;
`;

const ButtonText = styled.Text`
  font-family: 'Roboto';
  color: white;
  font-size: 16px;
  text-align: center;
`;

const BoldText = styled.Text`
  font-weight: bold;
`;
