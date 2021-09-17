import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: ${({ theme }) => theme.gray};
  background: ${({ theme }) => theme.white};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.black};
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 25px;
`;
