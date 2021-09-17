import React, { useEffect, useContext, useCallback, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, ListRenderItem } from 'react-native';

import Header from '@components/Header';

import api from '@services/api';

import { IMessage, useMessages } from '@hooks/useMessages';

import MessageItem from '@components/MessageItem';
import { UpperContainer } from '../styles';
import { IMessageRoutes } from '..';

const MessageList: React.FC<
  NativeStackScreenProps<IMessageRoutes, 'MessageList'>
> = ({ navigation }) => {
  const { messages, setMessages, setSelectedMessage } = useMessages();
  const [loading, setLoading] = useState(false);

  const themeContext = useContext(ThemeContext);

  const handleClickMessage = (message: IMessage) => {
    setSelectedMessage(message);
    navigation.navigate('MessageDetail');
  };

  const handleRenderItem: ListRenderItem<IMessage> = ({ item }) => (
    <MessageItem item={item} handleClickMessage={handleClickMessage} />
  );

  const getMessages = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.get<{ messages: IMessage[] }>('/read');
      console.log('Messages', res.data);
      setMessages(res.data.messages);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [setMessages]);

  useEffect(() => {
    getMessages();
  }, [getMessages]);

  return (
    <>
      <UpperContainer backgroundColor={themeContext.white} noFlex />
      <UpperContainer>
        <Header title="Messages" disableGoBack />
        <FlatList
          data={messages.sort((a, b) => b.timestamp - a.timestamp)}
          renderItem={handleRenderItem}
          keyExtractor={item => item.id.toString()}
          refreshing={loading}
          onRefresh={getMessages}
        />
      </UpperContainer>
    </>
  );
};

export default MessageList;
