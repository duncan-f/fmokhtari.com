"use client";

import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Image,
  Link,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Main from "@/layouts/main";
import Section from "@/components/section";
import Paragraph from "@/components/paragraph";

export default function Blog() {
  return (
    <Main>
      <Section delay={0.1}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink as={NextLink} href="/projects">
              Projects
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/projects/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Section>
      <Section delay={0.1}>
        <Heading as="h2" variant="page-title">
          Blog
        </Heading>
      </Section>
      <Section delay={0.2}>
        <Paragraph>
          My blog was built using the{" "}
          <Link href="https://gohugo.io/" target="_blank">
            Hugo
            <ExternalLinkIcon ml={1} />
          </Link>{" "}
          framework, a highly efficient and fast static website generator.
          Leveraging its speed and versatility, I was able to create a static
          and visually appealing website in no time. However, seeking even
          greater performance and optimization, I recently decided to completely
          rewrite my entire blog using{" "}
          <Link href="https://astro.build" target="_blank">
            Astro
            <ExternalLinkIcon ml={1} />
          </Link>
          .
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Paragraph>
          Known as the fastest static/server framework for static websites
          generation, Astro combines server-side rendering with the benefits of
          static HTML files. This migration has significantly enhanced the speed
          and efficiency of my website while preserving its flexibility and
          user-friendly nature.
        </Paragraph>
      </Section>
      <Section delay={0.4}>
        <HStack>
          <Badge>Website</Badge>
          <Link href="https://duncan-f.github.io/" target="_blank">
            https://duncan-f.github.io/
            <ExternalLinkIcon ml={1} />
          </Link>
        </HStack>
        <HStack>
          <Badge>Stack</Badge>
          <Text>Astro, Typescript, Tailwind CSS</Text>
        </HStack>
      </Section>
      <Section delay={0.5}>
        <Image borderRadius="15px" src="/images/projects/blog.png" alt="Blog" />
      </Section>
    </Main>
  );
}
