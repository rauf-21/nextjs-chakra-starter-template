import Head from 'next/head';
import { Flex, Heading } from '@chakra-ui/react';
import ToggleColorModeButton from '../components/common/ToggleColorModeButton';

export default function HomePage() {
  return (
    <Flex
      minW='100vw'
      minH='100vh'
      direction='column'
      justifyContent='center'
      alignItems='center'
      rowGap={10}
    >
      <Head>
        <title>Title</title>
        <meta
          name='description'
          content='Description'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <Heading>Hello, world!</Heading>
      <ToggleColorModeButton />
    </Flex>
  );
}
