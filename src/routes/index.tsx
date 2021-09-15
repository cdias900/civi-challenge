import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '@styles/themes/default';

import Messages from '@pages/Messages';

const Routes: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Messages />
    </ThemeProvider>
  );
};

export default Routes;
