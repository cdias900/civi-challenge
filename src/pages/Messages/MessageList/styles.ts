import styled from 'styled-components/native';

export const UpperContainer = styled.SafeAreaView`
  flex: 1;
  background: #fff;
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
