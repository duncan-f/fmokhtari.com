"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Container,
  Flex,
  Box,
  Heading,
  Button,
  SimpleGrid,
  List,
  ListItem,
} from "@chakra-ui/react";
import { ChevronRightIcon, EmailIcon } from "@chakra-ui/icons";
import { SiBuymeacoffee } from "react-icons/si";
import { FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";
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
              <p>Engineer / Web Developer / Bug Hunter</p>
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
              I&apos;m an engineer and an indie web developer passionate about
              Cyber Security, Ethical Hacking and CTFs. I like solving
              challenges on Hack The Box and Try Hack Me.
            </Paragraph>
            <Box textAlign="center" my={5}>
              <Link href="/projects">
                <Button
                  colorScheme="gray"
                  variant="link"
                  rightIcon={<ChevronRightIcon />}
                >
                  Portfolio
                </Button>
              </Link>
            </Box>
          </Section>

          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              Technologies I use
            </Heading>
            <SimpleGrid columns={[2, 2, 3]} gap={6} my={2}>
              {techsList.map((tech, idx) => (
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  gap={2}
                  key={idx}
                >
                  <Image
                    key={idx}
                    alt={tech.name}
                    src={tech.href}
                    width={65}
                    height={65}
                  />
                  <p>{tech.name}</p>
                </Flex>
              ))}
            </SimpleGrid>
          </Section>

          <Section delay={0.4}>
            <Heading as="h3" variant="section-title">
              I speak
            </Heading>
            <Paragraph>Berberian, English, French, Arabic, Russian</Paragraph>
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
                <Link href="https://youtube.com/@secwriteups" target="_blank">
                  <Button
                    variant="ghost"
                    leftIcon={<FaYoutube />}
                    aria-label="@SecWriteups"
                  >
                    @SecWriteups
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
