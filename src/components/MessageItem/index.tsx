import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { getDateString } from '@util/date';

import { IMessage } from '@hooks/useMessages';

import {
  MessageContainer,
  TextContainer,
  Subject,
  Detail,
  Timestamp,
} from './styles';

interface IMessageItemProps {
  item: IMessage;
  handleClickMessage: (item: IMessage) => void;
}

const MessageItem: React.FC<IMessageItemProps> = ({
  item,
  handleClickMessage,
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <MessageContainer onPress={() => handleClickMessage(item)}>
      <MaterialIcon size={14} name="circle" color={themeContext.blue} />
      <TextContainer>
        <Subject>{item.content.subject}</Subject>
        <Detail>{item.content.detail}</Detail>
      </TextContainer>
      <Timestamp>{getDateString(item.timestamp)}</Timestamp>
      <SimpleIcon size={14} name="arrow-right" color={themeContext.gray} />
    </MessageContainer>
  );
};

export default MessageItem;
