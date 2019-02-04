import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export default class RepoDetailsContent extends React.PureComponent {
  render() {
    const {
      owner,
      forkCount,
      url,
      description,
      stargazers,
      createdAt,
      pushedAt,
      updatedAt,
    } = this.props;
    return (
      <React.Fragment>
        <AvatarContainer>
          <Avatar source={{ uri: owner.avatarUrl }} />
        </AvatarContainer>

        <TouchableOpacity>
          <ContentLink>{url}</ContentLink>
        </TouchableOpacity>

        <ContentText>{description}</ContentText>

        <ContentText>
          <BoldText>Owner:</BoldText> {owner.login}
        </ContentText>

        <ContentText>
          <BoldText>Forks:</BoldText> {forkCount.toLocaleString()}
        </ContentText>

        <ContentText>
          <BoldText>Stars:</BoldText> {stargazers.totalCount.toLocaleString()}
        </ContentText>

        <ContentText>
          <BoldText>Created:</BoldText> {new Date(createdAt).getFullYear()}
        </ContentText>

        <ContentText>
          <BoldText>Last Push:</BoldText> {new Date(pushedAt).toDateString()}
        </ContentText>

        <ContentText>
          <BoldText>Last Update:</BoldText> {new Date(updatedAt).toDateString()}
        </ContentText>
      </React.Fragment>
    );
  }
}

const ContentText = styled.Text`
  padding-bottom: 15px;
  font-size: 16px;
`;

const ContentLink = styled.Text`
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 14px;
  color: blue;
`;

const AvatarContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: white;
  border-radius: 10px;
`;

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
`;

const BoldText = styled.Text`
  font-weight: bold;
`;
