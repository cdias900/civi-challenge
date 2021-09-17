import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Interfaces
export interface IMessage {
  id: number;
  timestamp: number;
  content: {
    subject: string;
    detail: string;
  };
  read?: boolean;
}

// Context data
export interface IMessagesContextData {
  messages: IMessage[];
  updateMessages: (messages: IMessage[], append?: boolean) => void;

  selectedMessage: IMessage;
  readMessage: (message: IMessage) => void;
}

// Context
export const MessagesContext = createContext<IMessagesContextData>(
  {} as IMessagesContextData,
);

// Provider
export const MessagesProvider: React.FC = ({ children }) => {
  // Context states
  const [readMessages, setReadMessages] = useState<number[]>([]);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<IMessage>(
    {} as IMessage,
  );

  // Set or append messages array
  const updateMessages = useCallback(
    (msgs: IMessage[], append?: boolean) => {
      setMessages(prevMsgs => [
        ...((append && prevMsgs) || []),
        ...msgs.map(m => ({ ...m, read: readMessages.includes(m.id) })),
      ]);
    },
    [readMessages],
  );

  // Mark message as read
  const readMessage = useCallback((message: IMessage) => {
    if (!message.read) {
      setReadMessages(msgs => [...msgs, message.id]);
      setMessages(msgs =>
        msgs.map(msg => {
          if (message.id === msg.id) {
            return {
              ...msg,
              read: true,
            };
          }
          return msg;
        }),
      );
    }
    setSelectedMessage(message);
  }, []);

  useEffect(() => {
    async function getReadMessages() {
      const readMsgs = await AsyncStorage.getItem('readMessages');
      if (readMsgs) {
        setReadMessages(JSON.parse(readMsgs));
      }
    }
    getReadMessages();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('readMessages', JSON.stringify(readMessages));
  }, [readMessages]);

  return (
    <MessagesContext.Provider
      value={{
        messages,
        updateMessages,

        selectedMessage,
        readMessage,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};

// Hook
export function useMessages(): IMessagesContextData {
  const context = useContext(MessagesContext);
  return context;
}
