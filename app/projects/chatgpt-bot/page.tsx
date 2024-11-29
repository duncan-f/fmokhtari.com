"use client";

import {
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Article from "@/layouts/article";
import Section from "@/components/section";
import Paragraph from "@/components/paragraph";
import { projectsList, siteData } from "@/lib/config";
import { BuyButton } from "@/components/payhip";

export default function ChatGptBot() {
  const chatgpt = projectsList["chatgpt-telegram-bot"];
  return (
    <Article>
      <Container>
        <Section delay={0.1}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink as={NextLink} href="/projects">
                Projects
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/projects/chatgpt-bot">
                ChatGPT Telegram Bot
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Section>
        <Section delay={0.1}>
          <Heading as="h2" variant="page-title">
            ChatGPT Telegram Bot
          </Heading>
        </Section>
        <Section delay={0.2}>
          <Paragraph>
            This ChatGPT Telegram bot, developed in <Text as="b">Python</Text>,
            leverages the <Text as="b">python-telegram-bot</Text> package to
            interact with users on Telegram and the <Text as="b">openai</Text>{" "}
            package to access OpenAI&apos;s language model for generating
            responses.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Paragraph>
            It connects to a <Text as="b">MySQL</Text> database to store user
            data and conversation history, ensuring personalized interactions
            and persistent data management. The integration of these
            technologies allows the bot to provide intelligent, context-aware
            responses while maintaining efficient data handling and storage
            capabilities.
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Box
            p={2}
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
            gap={{ base: 5, md: 10 }}
          >
            <Link
              as={NextLink}
              href={`${siteData.paymentUrl}${chatgpt.productId}`}
            >
              View product page
            </Link>
            <BuyButton productId={chatgpt.productId} price={50} />
          </Box>
        </Section>
        <Section delay={0.5}>
          <List>
            <ListItem display="flex" alignItems="center" gap={2}>
              <Badge>Published</Badge>
              <Text>2023</Text>
            </ListItem>
            <ListItem display="flex" alignItems="center" gap={2}>
              <Badge>Website</Badge>
              <Link href="https://t.me/MacLeodClanBot" target="_blank">
                @MacLeodClanBot
                <ExternalLinkIcon ml={1} />
              </Link>
            </ListItem>
            <ListItem display="flex" alignItems="center" gap={2}>
              <Badge>Stack</Badge>
              <Text>Python</Text>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.6}>
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={2}>
              <Image
                borderRadius="15px"
                src="/images/projects/chatgpt-bot/photo1.jpg"
                alt="ChatGPT Telegram Bot"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <Image
                borderRadius="15px"
                src="/images/projects/chatgpt-bot/photo2.jpg"
                alt="ChatGPT Telegram Bot"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <Image
                borderRadius="15px"
                src="/images/projects/chatgpt-bot/photo3.jpg"
                alt="ChatGPT Telegram Bot"
              />
            </GridItem>
          </Grid>
        </Section>
      </Container>
    </Article>
  );
}
