"use client";

import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Main from "@/layouts/main";
import Section from "@/components/section";
import Paragraph from "@/components/paragraph";

export default function Geoserices() {
  return (
    <Main>
      <Container>
        <Section delay={0.1}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink as={NextLink} href="/projects">
                Projects
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/projects/geoservices-inc">
                S.B. Géoservices Inc.
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Section>
        <Section delay={0.1}>
          <Heading as="h2" variant="page-title">
            S.B. Géoservices Inc.
          </Heading>
        </Section>
        <Section delay={0.2}>
          <Paragraph>
            This website was created with Astro, combined with React. I stumbled
            upon this technology on YouTube and I wanted to try it out and make
            something with it. It&apos;s an easy and fast Framework for static
            websites.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Paragraph>
            I created this website for a friend. His company operates in
            geoscience and geotechnical engineering.
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <HStack>
            <Badge>Published</Badge>
            <Text>2023</Text>
          </HStack>
          <HStack>
            <Badge>Website</Badge>
            <Link href="https://sboulila.netlify.app/" target="_blank">
              https://sboulila.netlify.app/
              <ExternalLinkIcon ml={1} />
            </Link>
          </HStack>
          <HStack>
            <Badge>Stack</Badge>
            <Text>Astro, React, Javascript</Text>
          </HStack>
        </Section>

        <Section delay={0.5}>
          <Image
            src="/images/projects/geoservices.png"
            alt="S.B. Géoservices Inc."
            borderRadius="lg"
          />
        </Section>
      </Container>
    </Main>
  );
}
