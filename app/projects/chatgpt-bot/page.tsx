"use client";

import {
  Badge,
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
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Article from "@/layouts/article";
import Section from "@/components/section";
import Paragraph from "@/components/paragraph";

export default function ChatGptBot() {
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
            Introducing my incredible ChatGPT bot, coded in Python using the
            powerful packages <Text as="b">python-telegram-bot</Text> and{" "}
            <Text as="b">OpenAI</Text>. With this bot, You can generate text and
            images, and even answer voice messages. It&apos;s designed to
            provide an exceptional conversational experience, going beyond just
            text-based interactions.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Paragraph>
            I take communication to the next level by engaging in dynamic
            conversations with users. Whether it&apos;s through text or voice
            messages, the bot will deliver a personalized chat experience.
          </Paragraph>
        </Section>
        <Section delay={0.4}>
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
        <Section delay={0.5}>
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
