import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import RepoDetailsModal from './RepoDetailsModal';

export default class RepoListView extends React.PureComponent {
  state = {
    selectedRepoId: null,
  };

  setSelectedRepo(repoId) {
    this.setState({ selectedRepoId: repoId });
  }

  getRepoById(id) {
    const { repos } = this.props;
    return repos.find(repo => repo.id === id);
  }

  render() {
    const { repos } = this.props;
    return (
      <React.Fragment>
        <List>
          {repos.map(repo => (
            <ListItem key={repo.id} onPress={() => this.setSelectedRepo(repo.id)}>
              <Card>
                <Header>
                  <Name numberOfLines={1}>{`${repo.name}`}</Name>
                  <StarCount>
                    {repo.viewerHasStarred && '⭐ '}
                    {repo.stargazers.totalCount.toLocaleString()}
                  </StarCount>
                </Header>
                <Description numberOfLines={2}>{repo.description}</Description>
              </Card>
            </ListItem>
          ))}
        </List>
        <RepoDetailsModal
          isVisible={!!this.state.selectedRepoId}
          onClose={() => this.setSelectedRepo(null)}
          repo={this.getRepoById(this.state.selectedRepoId)}
        />
      </React.Fragment>
    );
  }
}

const List = styled.ScrollView`
  flex: 1;
  flex-direction: column;
  padding: 15px;
  background-color: powderblue;
`;

const ListItem = styled.TouchableOpacity`
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
