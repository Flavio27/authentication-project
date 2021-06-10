import useAuth from 'src/hooks/useAuth';
import { Box, ChakraProvider, Heading } from '@chakra-ui/react';
// test
export default function Home() {
  const { user, signin } = useAuth();
  console.log(`user ${user}`);
  return (
    <Box bg="gray.100" w="100%" p={4}>
      <Heading as="h2" size="3xl" isTruncated>
        Aprenda Programação direto ao ponto
  </Heading>
    </Box>
  );
}
