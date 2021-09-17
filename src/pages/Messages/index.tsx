import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MessagesProvider } from '@hooks/useMessages';

import MessageList from './MessageList';
import MessageDetail from './MessageDetail';

// Route types
export type IMessageRoutes = {
  MessageList: undefined;
  MessageDetail: undefined;
};

const Messages: React.FC = () => {
  const Stack = createNativeStackNavigator<IMessageRoutes>();

  return (
    <MessagesProvider>
      <Stack.Navigator
        initialRouteName="MessageList"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="MessageList" component={MessageList} />
        <Stack.Screen name="MessageDetail" component={MessageDetail} />
      </Stack.Navigator>
    </MessagesProvider>
  );
};

export default Messages;
