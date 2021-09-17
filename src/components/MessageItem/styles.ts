import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const MessageContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-color: ${({ theme }) => theme.gray};
`;

export const TextContainer = styled.View`
  padding: 4px 8px;
  flex: 1;
`;

export const Subject = styled.Text`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.black};
`;

export const Detail = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 14px;
  color: ${({ theme }) => theme.gray};
`;

export const Timestamp = styled.Text`
  color: ${({ theme }) => theme.gray};
`;
