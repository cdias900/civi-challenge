import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MessageList from './MessageList';

export type IMessageRoutes = {
  MessageList: undefined;
  Message: undefined;
};

const Messages: React.FC = () => {
  const Stack = createNativeStackNavigator<IMessageRoutes>();

  return (
    <Stack.Navigator
      initialRouteName="MessageList"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="MessageList" component={MessageList} />
    </Stack.Navigator>
  );
};

export default Messages;
