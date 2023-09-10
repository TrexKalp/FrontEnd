"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function Success() {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Box textAlign="center" py={10} px={6} width="1100px">
        <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Reveille Rewards: Shopping Small Pays Bigs
        </Heading>
        <Text color={"gray.500"}>
          Ever wanted to find a new small business but didn't know where to
          start? Use this interactive map that's updated weekly to shop small
          and make a huge difference! Small businesses support our communnities
          in more ways than we imagine and it's time that we gave back.
        </Text>
      </Box>
    </Flex>
  );
}
