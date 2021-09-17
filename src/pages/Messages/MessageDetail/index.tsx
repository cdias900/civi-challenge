import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Header from '@components/Header';

import { useMessages } from '@hooks/useMessages';

import { UpperContainer, Content } from '../styles';
import { Text } from './styles';

const MessageDetail: React.FC = () => {
  // Get message context data
  const { selectedMessage } = useMessages();

  // Get theme context
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
