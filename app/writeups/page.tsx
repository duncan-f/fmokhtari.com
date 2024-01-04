"use client";

import {
  Box,
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import Article from "@/layouts/article";
import Section from "@/components/section";
import { writeupsList } from "@/lib/config";

export default function Writeups() {
  const color = useColorModeValue("#f0e7db40", "#20202380");

  return (
    <Article>
      <Container>
        <Section delay={0.1}>
          <Heading as="h3" fontSize={20}>
            Writeups
          </Heading>
        </Section>
        <Section delay={0.2}>
          <SimpleGrid columns={[1, 2, 2]} gap={4}>
            {writeupsList.map((write, idx) => (
              <Link key={idx} href={write.href} target="_blank">
                <Card
                  variant="unstyled"
                  overflow="hidden"
                  size="sm"
                  bg={color}
                  p={4}
                >
                  <CardHeader mb={2}>
                    <Heading size="md" textAlign="center">
                      {write.title}
                    </Heading>
                  </CardHeader>
                  <CardBody my={2}>
                    <Image
                      src={write.image}
                      alt={write.title}
                      borderRadius="lg"
                      mb={2}
                    />
                    <Text>{write.description}</Text>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </SimpleGrid>
        </Section>
      </Container>
    </Article>
  );
}
