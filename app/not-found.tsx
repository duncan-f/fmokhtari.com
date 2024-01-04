"use client";

import Link from "next/link";
import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Article from "@/layouts/article";

const NotFound = () => {
  return (
    <Article>
      <Flex
        direction="column"
        align="center"
        justify="center"
        h="calc(100vh)"
        gap={8}
      >
        <Box h={8} display="flex" alignItems="center" gap={2}>
          <Heading>404</Heading>
          <Divider orientation="vertical" />
          <Heading>Page not found!</Heading>
        </Box>
        <Text fontSize="xl">What are you looking for?!</Text>
        <Link href="/">
          <Button colorScheme="facebook" leftIcon={<ChevronLeftIcon />}>
            Return Home
          </Button>
        </Link>
      </Flex>
    </Article>
  );
};

export default NotFound;
