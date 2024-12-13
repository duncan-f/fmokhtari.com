"use client";

import theme from "@/lib/theme";
import { ChakraProvider } from "@chakra-ui/react";
import Animations from "./animations";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Animations>{children}</Animations>
    </ChakraProvider>
  );
}
