import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, BackButton } from './styles';

interface IHeaderProps {
  title: string;
  disableGoBack?: boolean;
  onGoBack?: () => void;
}

const Header: React.FC<IHeaderProps> = ({ title, onGoBack, disableGoBack }) => {
  // Get theme context
  const themeContext = useContext(ThemeContext);

  // Get navigation
  const navigation = useNavigation();

  return (
    <Container>
      {!disableGoBack && (
        <BackButton onPress={onGoBack || navigation.goBack}>
          <Icon size={16} name="arrow-left" color={themeContext.black} />
        </BackButton>
      )}
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;
