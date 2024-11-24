"use client";

import {
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Image,
  List,
  ListItem,
  Link,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Article from "@/layouts/article";
import Section from "@/components/section";
import Paragraph from "@/components/paragraph";

export default function Geoserices() {
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
            This website was created using Astro, with the combination of React.
            I stumbled across this technology on a YouTube video and I wanted to
            try it out and make something with it. It&apos;s a powerful and fast
            Framework for static and static client-side web apps.
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Paragraph>
            I had the pleasure of creating this stunning website for my
            friend&apos;s company in the exciting fields of geoscience and
            geotechnical engineering.
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
              <Link
                href="https://sboulila.netlify.app/"
                target="_blank"
                display="inline-flex"
                alignItems="center"
              >
                https://sboulila.netlify.app/
                <ExternalLinkIcon ml={1} />
              </Link>
            </ListItem>
            <ListItem display="flex" alignItems="center" gap={2}>
              <Badge>Stack</Badge>
              <Text>Astro, React, Javascript</Text>
            </ListItem>
          </List>
        </Section>

        <Section delay={0.5}>
          <Image
            src="/images/projects/geoservices.png"
            alt="S.B. Géoservices Inc."
            borderRadius="lg"
          />
        </Section>
      </Container>
    </Article>
  );
}
