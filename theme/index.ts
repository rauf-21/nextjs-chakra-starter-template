import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  useSystemColorMode: true,
  fonts: {
    body: `'Montserrat', sans-serif`,
  },
});

export default theme;
