"use client";

import { motion } from "framer-motion";
import {
  Box,
  Flex,
  Container,
  Link,
  List,
  ListItem,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaGithub } from "react-icons/fa";
import { HamburgerIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Nunito } from "next/font/google";
import { siteData } from "@/lib/config";
import ToggleTheme from "@/components/toggle-theme";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

const LinkItem = ({
  href,
  path,
  target,
  children,
  ...props
}: {
  href: string;
  path: string;
  target?: string;
  children: React.ReactNode;
}) => {
  const active = path === href;

  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const bgColor = useColorModeValue("#805ad5", "#a0aec040");

  return (
    <Link
      py={2}
      px={4}
      as={NextLink}
      href={href}
      bg={active ? bgColor : undefined}
      color={active ? "#fff" : inactiveColor}
      target={target}
      borderRadius="lg"
      display="inline-flex"
      alignItems="center"
      gap={2}
      style={{ textDecoration: "none" }}
      {...props}
    >
      {children}
    </Link>
  );
};

const Navbar = (props: any) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as={motion.nav}
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      {...props}
    >
      <Container
        py={2}
        alignItems="center"
        display="flex"
        maxW="container.md"
        justifyContent="space-between"
      >
        <Flex justifyContent="center" alignItems="center" mr={5}>
          <NextLink href="/" style={{ textDecoration: "none" }}>
            <Text
              color={useColorModeValue("gray.800", "whiteAlpha.900")}
              fontSize="22px"
              fontWeight="bold"
              className={nunito.className}
            >
              {siteData.brand}
            </Text>
          </NextLink>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          justifyContent="right"
          flexGrow={5}
          mt={{ base: 4, md: 0 }}
        >
          <List display="flex" gap={4} alignItems="center">
            <ListItem>
              <LinkItem href="/projects" path={path}>
                Projects
              </LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="/writeups" path={path}>
                Writeups
              </LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem
                target="_blank"
                href="https://github.com/duncan-f/fmokhtari.com"
                path={path}
              >
                <FaGithub />
                Source Code
                <ExternalLinkIcon />
              </LinkItem>
            </ListItem>
          </List>
        </Stack>
        <Box flex={1} textAlign="right">
          <ToggleTheme />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem as={NextLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={NextLink} href="/projects">
                  Projects
                </MenuItem>
                <MenuItem as={NextLink} href="/writeups">
                  Writeups
                </MenuItem>
                <MenuItem
                  as={Link}
                  icon={<FaGithub />}
                  href="https://github.com/duncan-f/fmokhtari.com"
                >
                  Source Code
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
