import { Box, Flex } from '@chakra-ui/layout';
import React from 'react';

function Topbar(props) {
	const bgColor = "#FFF";
	const color = "#1A202C";
	const borderColor = "#DDD";

	return (
		<Flex
			w="full"
			position="fixed"
			zIndex={99999}
			bgColor={bgColor}
			color={color}
			borderBottom={`1px solid ${borderColor}`}
		>
			<Flex
				alignItems="center"
				justifyContent="space-between"
				width="full"
				maxW="1200px"
				margin="0 auto"
				h="60px"
				px={4, 8}
			>
				<Box>
					Teste topbar
        </Box>
				<Box>
					Login
        </Box>

			</Flex>
		</Flex>
	);
}

export default Topbar;