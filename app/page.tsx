"use client";

import Image from "next/image";
import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  Heading,
  Button,
  SimpleGrid,
  List,
  ListItem,
  Link,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { SiBuymeacoffee } from "react-icons/si";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { siteData, techsList } from "@/lib/config";
import Main from "@/layouts/main";
import Article from "@/layouts/article";
import Section from "@/components/section";
import Paragraph from "@/components/paragraph";

export default function Home() {
  return (
    <Main>
      <Article>
        <Container>
          <Box display={{ md: "flex" }} alignItems="center" mb={10}>
            <Box flexGrow={1} textAlign={{ base: "center", md: "left" }}>
              <Heading as="h2" variant="page-title">
                Hi, I&apos;m Farouk Mokhtari
              </Heading>
              <p>Engineer / Bug Bounty Hunter / Web Developer</p>
            </Box>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              textAlign="center"
            >
              <Box
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                display="inline-block"
                borderRadius={{ base: "lg", md: "full" }}
                overflow="hidden"
              >
                <Image
                  src="/images/duncan.png"
                  alt={siteData.author}
                  width={120}
                  height={120}
                />
              </Box>
            </Box>
          </Box>

          <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
              About Me
            </Heading>
            <Paragraph>
              I&apos;m an engineer with a strong focus on cybersecurity and
              ethical hacking. I enjoy solving challenges on platforms like Hack
              The Box and Try Hack Me to sharpen my skills. Additionally, I have
              experience as an independent web developer.
            </Paragraph>
            <Box textAlign="center" my={8}>
              <Link as={NextLink} href="/projects">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                  My portfolio
                </Button>
              </Link>
            </Box>
          </Section>

          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              Technologies I use
            </Heading>
            <SimpleGrid columns={[2, 3, 4]} gap={2} py={2} my={2}>
              {techsList.map((tech, idx) => (
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  gap={{ base: 5, md: 3 }}
                  key={idx}
                >
                  <Image
                    key={idx}
                    alt={tech.name}
                    src={tech.href}
                    width={48}
                    height={48}
                  />
                  <Text mb={2} fontSize="sm">
                    {tech.name}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>
          </Section>

          <Section delay={0.4}>
            <Heading as="h3" variant="section-title">
              I speak
            </Heading>
            <Text>Berberian, English, French, Arabic, Russian</Text>
          </Section>

          <Section delay={0.5}>
            <Heading as="h3" variant="section-title">
              You can find me
            </Heading>
            <List>
              <ListItem>
                <Link href="https://twitter.com/duncan12back" target="_blank">
                  <Button
                    variant="ghost"
                    leftIcon={<FaTwitter />}
                    aria-label="@duncan12back"
                  >
                    @duncan12back
                  </Button>
                </Link>
              </ListItem>

              <ListItem>
                <Link href="https://github.com/duncan-f" target="_blank">
                  <Button
                    variant="ghost"
                    leftIcon={<FaGithub />}
                    aria-label="@duncan-f"
                  >
                    @duncan-f
                  </Button>
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  href="https://www.buymeacoffee.com/f0uadfS"
                  target="_blank"
                >
                  <Button
                    variant="ghost"
                    leftIcon={<SiBuymeacoffee />}
                    aria-label="Buy me a coffee"
                  >
                    Buy me a coffee
                  </Button>
                </Link>
              </ListItem>
            </List>
          </Section>
        </Container>
      </Article>
    </Main>
  );
}
