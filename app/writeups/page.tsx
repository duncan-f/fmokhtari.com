"use client";

import {
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
  const pubColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Article>
      <Container>
        <Section delay={0.1}>
          <Heading as="h3" fontSize={28} variant="section-title">
            Writeups
          </Heading>
        </Section>
        <Section delay={0.2}>
          <SimpleGrid columns={[1, 2, 2]} gap={4} marginTop={8}>
            {writeupsList.map((write, idx) => (
              <Link key={idx} href={write.href} target="_blank">
                <Card
                  variant="unstyled"
                  overflow="hidden"
                  textAlign={{ base: "center", md: "left" }}
                  size="sm"
                  bg={color}
                  p={2}
                >
                  <CardHeader mb={2} textAlign="center">
                    <Heading size="md" mb={1}>
                      {write.title}
                    </Heading>
                    <Text fontSize="sm" color={pubColor}>
                      Published on {new Date(write.published).toDateString()}
                    </Text>
                  </CardHeader>
                  <CardBody my={2}>
                    <Image
                      src={write.image}
                      alt={write.title}
                      borderRadius="lg"
                      mb={2}
                    />
                    <Text textAlign="center">{write.description}</Text>
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
