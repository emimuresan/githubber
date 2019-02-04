import React from 'react';
import { Modal, TouchableOpacity, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import { SecondaryButton } from '../../components/Buttons';
import DetailsContent from './RepoDetailsContent';
import { ADD_STAR } from './operations';

export default class RepoDetailsModal extends React.PureComponent {
  state = {
    isStarred: this.props.repo ? this.props.repo.viewerHasStarred : false,
  };

  componentDidUpdate(prevProps) {
    const { repo } = this.props;
    const { repo: previousRepo } = prevProps;
    if (repo && ((previousRepo && previousRepo.id !== repo.id) || !previousRepo)) {
      this.setState({ isStarred: repo.viewerHasStarred });
    }
  }

  handleAddStar(addStar) {
    const { repo } = this.props;
    addStar({
      variables: { input: { starrableId: repo.id } },
    });
    this.setState({ isStarred: true });
  }

  render() {
    const { isVisible, onClose, repo } = this.props;
    const { isStarred } = this.state;
    return (
      <Modal animationType="slide" transparent={false} visible={isVisible}>
        {repo && (
          <SafeAreaView style={{ flex: 1, backgroundColor: 'powderblue' }}>
            <Container>
              <Header>
                <HeaderTitle>{repo.name}</HeaderTitle>
                <TouchableOpacity onPress={onClose}>
                  <HeaderCloseIcon>✕</HeaderCloseIcon>
                </TouchableOpacity>
              </Header>

              <Content>
                <DetailsContent {...repo} />
              </Content>

              <Footer>
                <Mutation mutation={ADD_STAR} refetchQueries={['GetRepositiories']}>
                  {addStar => (
                    <SecondaryButton
                      title={isStarred ? '⭐ Starred' : '👉 Star repo'}
                      disabled={isStarred}
                      onPress={() => this.handleAddStar(addStar)}
                    />
                  )}
                </Mutation>
              </Footer>
            </Container>
          </SafeAreaView>
        )}
      </Modal>
    );
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background: powderblue;
`;

const Header = styled.View`
  height: 50px;
  padding: 0 15px;
  background: steelblue;
  box-shadow: 0 2px 1px rgba(33, 33, 33, 0.2);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const HeaderCloseIcon = styled.Text`
  color: white;
  font-size: 24px;
`;

const Content = styled.View`
  flex: 3;
  padding: 15px;
`;

const Footer = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: 20px;
`;
