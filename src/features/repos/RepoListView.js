import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';

export default class RepoListView extends React.PureComponent {
  render() {
    const { repos } = this.props;
    return (
      <List>
        {repos.map(repo => (
          <ListItem key={repo.id}>
            <Card>
              <Header>
                <Name numberOfLines={1}>{`${repo.name}`}</Name>
                <StarCount>⭐ {repo.stargazers.totalCount.toLocaleString()}</StarCount>
              </Header>
              <Description numberOfLines={2}>{repo.description}</Description>
            </Card>
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
`;

const Name = styled(HeaderItem)`
  font-weight: bold;
  width: 65%;
`;

const StarCount = styled(HeaderItem)`
  text-align: right;
  width: 35%;
`;
