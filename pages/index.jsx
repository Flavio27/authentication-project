import useAuth from '../hooks/useAuth';
import { ChakraProvider } from '@chakra-ui/react';
// test
export default function Home() {
  const { user, signin } = useAuth();
  console.log(`user ${user}`);
  return (
    <div>
      <h1>Initial</h1>
      <button onClick={() => signin()}>Logar com github</button>
    </div>
  );
}
