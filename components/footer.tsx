import { Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Text textAlign="center" pt={4}>
      &copy; {new Date().getFullYear()} Farouk Mokhtari. All rights reserved.
    </Text>
  );
}
