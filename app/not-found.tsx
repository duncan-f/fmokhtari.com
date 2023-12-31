"use client";

import Link from "next/link";
import { Box, Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Main from "@/layouts/main";

const NotFound = () => {
  return (
    <Main>
      <Flex
        direction="column"
        align="center"
        justify="center"
        h="calc(75vh)"
        gap={8}
      >
        <Box h={8} display="flex" alignItems="center" gap={2}>
          <Heading>404</Heading>
          <Divider orientation="vertical" />
          <Heading>Page not found!</Heading>
        </Box>
        <Text fontSize="xl">What are you looking for?!</Text>
        <Link href="/">
          <Button leftIcon={<ChevronLeftIcon />}>Return Home</Button>
        </Link>
      </Flex>
    </Main>
  );
};

export default NotFound;
