"use client";

import React, { ReactNode, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Main = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    if (router.isReady) {
      console.log(router.query);
    }
  }, [router.isReady]);

  return (
    <Box as="main" pb={8}>
      <Navbar path={path} />

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
