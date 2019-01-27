import React from 'react';
import styled from 'styled-components';

export default class RepoListView extends React.PureComponent {
  render() {
    const { repos } = this.props;
    return (
      <List>
        {repos.map(repo => (
          <ListItem key={repo.id}>
            <Header>
              <Name numberOfLines={1}>{`${repo.name}`}</Name>
              <StarCount>⭐ {repo.stargazers.totalCount.toLocaleString()}</StarCount>
            </Header>
            <Description numberOfLines={2}>{repo.description}</Description>
          </ListItem>
        ))}
      </List>
    );
  }
}

const List = styled.ScrollView`
  flex: 1;
  flex-direction: column;
  padding: 15px;
  background-color: powderblue;
`;

const ListItem = styled.View`
  flex: 3;
  flex-direction: column;
  background-color: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 1px rgba(33, 33, 33, 0.2);
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 15px;
`;

const Description = styled.Text`
  font-size: 14px;
`;

const HeaderItem = styled.Text`
  font-size: 20px;
  flex: 1;
`;

const Name = styled(HeaderItem)`
  font-weight: bold;
`;

const StarCount = styled(HeaderItem)`
  text-align: right;
`;
