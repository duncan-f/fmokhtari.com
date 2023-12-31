"use client";

import React, { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Main = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();

  return (
    <Box as="main" pb={8}>
      <Navbar path={path} />

      <Container maxW="container.md" pt="90px">
        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
