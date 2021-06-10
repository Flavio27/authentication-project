import useAuth from 'src/hooks/useAuth';
import { Box, Button, ChakraProvider, Flex, Heading, Text } from '@chakra-ui/react';
import Layout from "src/components/Layout";
import { getAllTechnologies } from "src/lib/dato-cms"

const Cover = ({ technologies }) => {
  console.log(technologies)
  const bgColor = "#FFF"
  return (
    <Box bgColor={bgColor}>
      <Flex justifyContent="center" alignItems="center" py={20}>
        <Flex
          px={[4, 8]}
          py={[0, 20]}
          w="full"
          maxW="1200px"
          direction="column"
        >
          <Heading
            as="h1"
            fontSize={{ base: "42px", md: "52px", lg: "72px" }}
            mb={4}
            fontWeight="xBold"
          >
            Aprenda Programação
            <Box>Direto Ao ponto</Box>
            <Box bgGradient="Linear(to-l, #7928CA, #FF0080)" bgClip="text">
              100% free.
            </Box>
          </Heading>
          <Text fontSize={{ base: "16px", md: "20px", lg: "22px" }}>
            <Box>
              Mantenha seus conhecimentos atualizados com as mais novas{''}
            </Box>
            <Box>tecnologias que estão disponiveis no mercado</Box>
          </Text>
          <Box>
            <Button
              as="a"
              my={10}
              variant="outline"
              size="lg"
              href="#series"
            >
              Bora Começar!
            </Button>
          </Box>
          {technologies.map(t =>(
            t.name
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}
export default function Home({ technologies }) {
  // const { user, signin } = useAuth();

  return (
    <Layout>
      <Cover technologies={technologies} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const technologies = await getAllTechnologies();
  return {
    props: {
      technologies
    },
    revalidate: 120,
  }
}
