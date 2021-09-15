import React from 'react';
import { Text } from 'react-native';

import { UpperContainer, Content } from './styles';

const MessageList: React.FC = () => {
  return (
    <UpperContainer>
      <Content>
        <Text>Hello World</Text>
      </Content>
    </UpperContainer>
  );
};

export default MessageList;
