import styled from 'styled-components/native';

interface IUpperContainerProps {
  backgroundColor?: string;
  noFlex?: boolean;
}

export const UpperContainer = styled.SafeAreaView<IUpperContainerProps>`
  flex: ${({ noFlex }) => (noFlex ? 0 : 1)};
  background: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.offWhite};
`;

export const Content = styled.ScrollView.attrs({
  bounces: false,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    justifyContent: 'space-between',
    flexGrow: 1,
  },
})`
  flex: 1;
`;
