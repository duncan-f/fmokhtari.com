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

const nunito = Nunito({ subsets: ["latin"], weights: ["400", "700"] });

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href;

  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Link
      p={2}
      as={NextLink}
      href={href}
      scroll={false}
      bg={active ? "primary" : undefined}
      color={active ? "#ddd" : inactiveColor}
      target={target}
      borderRadius="lg"
      style={{ "text-decoration": "none" }}
      {...props}
    >
      {children}
    </Link>
  );
};

const Navbar = (props) => {
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
        align="center"
        display="flex"
        maxW="container.md"
        justify="space-between"
      >
        <Flex justifyContent="center" alignItems="center" mr={5}>
          <Link
            as={NextLink}
            href="/"
            scroll={false}
            style={{ "text-decoration": "none" }}
          >
            <Text
              color={useColorModeValue("gray.800", "whiteAlpha.900")}
              fontSize="22px"
              fontWeight="bold"
              className={nunito.className}
            >
              {siteData.brand}
            </Text>
          </Link>
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
              <LinkItem
                target="_blank"
                href="https://github.com/duncan-f/fmokhtari.com"
                display="inline-flex"
                alignItems="center"
                gap={2}
                path={path}
                isExternal
              >
                <FaGithub />
                Source Code
                <ExternalLinkIcon />
              </LinkItem>
            </ListItem>
          </List>
        </Stack>
        <Box flex={1} align="right">
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
