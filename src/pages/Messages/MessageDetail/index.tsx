import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Header from '@components/Header';

import { useMessages } from '@hooks/useMessages';

import { UpperContainer, Content } from '../styles';
import { Text } from './styles';

const MessageDetail: React.FC = () => {
  const { selectedMessage } = useMessages();

  const themeContext = useContext(ThemeContext);

  return (
    <>
      <UpperContainer backgroundColor={themeContext.white} noFlex />
      <UpperContainer>
        <Header title={selectedMessage.content.subject} />
        <Content>
          <Text>{selectedMessage.content.detail}</Text>
        </Content>
      </UpperContainer>
    </>
  );
};

export default MessageDetail;
