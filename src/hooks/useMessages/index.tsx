import React, { createContext, useState, useContext } from 'react';

// Interfaces
export interface IMessage {
  id: number;
  timestamp: number;
  content: {
    subject: string;
    detail: string;
  };
  visited?: boolean;
}

// Context data
export interface IMessagesContextData {
  messages: IMessage[];
  setMessages: (messages: IMessage[]) => void;

  selectedMessage: IMessage;
  setSelectedMessage: (message: IMessage) => void;
}

// Context
export const MessagesContext = createContext<IMessagesContextData>(
  {} as IMessagesContextData,
);

// Provider
export const MessagesProvider: React.FC = ({ children }) => {
  // Context states
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<IMessage>(
    {} as IMessage,
  );

  return (
    <MessagesContext.Provider
      value={{
        messages,
        setMessages,

        selectedMessage,
        setSelectedMessage,
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
