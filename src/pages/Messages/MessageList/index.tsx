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
  // Get message context data
  const { messages, updateMessages, readMessage } = useMessages();
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  // Get theme context
  const themeContext = useContext(ThemeContext);

  // Mark message as read and navigate to message detail screen
  const handleClickMessage = (message: IMessage) => {
    readMessage(message);
    navigation.navigate('MessageDetail');
  };

  // Render message items
  const handleRenderItem: ListRenderItem<IMessage> = ({ item }) => (
    <MessageItem item={item} handleClickMessage={handleClickMessage} />
  );

  // Get messages from api
  const getMessages = useCallback(async () => {
    try {
      const res = await api.get<{ messages: IMessage[] }>('/read', {
        params: { page },
      });
      updateMessages(res.data.messages, page > 1);
    } catch (err) {
      console.log(err);
    } finally {
      if (refreshing) {
        setRefreshing(false);
      }
    }
  }, [updateMessages, refreshing, page]);

  // Goes back to first page and refreshes
  const handleRefresh = () => {
    setRefreshing(true);
    setPage(1);
  };

  // Increments page number
  const handleNextPage = () => setPage(p => p + 1);

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
          refreshing={refreshing}
          onRefresh={handleRefresh}
          onEndReached={handleNextPage}
        />
      </UpperContainer>
    </>
  );
};

export default MessageList;
