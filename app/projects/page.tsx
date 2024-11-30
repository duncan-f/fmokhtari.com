"use client";

import {
  Box,
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Container,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import Article from "@/layouts/article";
import Section from "@/components/section";
import { colabList, projectsList } from "@/lib/config";

export default function Projects() {
  const color = useColorModeValue("#f0e7db40", "#20202380");

  return (
    <Article>
      <Container>
        <Section delay={0.1}>
          <Heading as="h3" fontSize={28} variant="section-title">
            Projects
          </Heading>
        </Section>
        <Section delay={0.2}>
          <SimpleGrid columns={[1, 2, 2]} gap={4} marginTop={8}>
            {Object.values(projectsList).map((projects, index: number) => (
              <Link key={index} href={projects.href}>
                <Card
                  variant="unstyled"
                  overflow="hidden"
                  textAlign={{ base: "center", md: "left" }}
                  size="sm"
                  bg={color}
                  p={2}
                >
                  <CardHeader mb={2}>
                    <Heading size="md" textAlign="center">
                      {projects.title}
                    </Heading>
                  </CardHeader>
                  <Box
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    mt={2}
                    gap={1}
                  >
                    {projects.techs.map((tech: string, idx: number) => (
                      <Badge key={idx}>{tech}</Badge>
                    ))}
                  </Box>
                  <Divider mt={2} />
                  <CardBody
                    my={2}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Image
                      src={projects.image}
                      alt={projects.title}
                      borderRadius="lg"
                      width={{ base: "full", md: 240 }}
                      height={{ base: "full", md: 150 }}
                      mb={2}
                    />
                    <Text textAlign="center">{projects.description}</Text>
                  </CardBody>
                  {projects.purchasable && (
                    <CardFooter
                      display="center"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text as="b" color="teal.200">
                        Buy now!! - ${projects.amount}
                      </Text>
                    </CardFooter>
                  )}
                </Card>
              </Link>
            ))}
          </SimpleGrid>
        </Section>
        <Divider mb={5} />
        <Section delay={0.3}>
          <Heading as="h3" fontSize={28} variant="section-title">
            Collaborations
          </Heading>
        </Section>
        <Section delay={0.4}>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            {colabList.map((collab, idx) => (
              <Link key={idx} href={collab.href}>
                <Card
                  variant="unstyled"
                  overflow="hidden"
                  textAlign={{ base: "center", md: "left" }}
                  size="sm"
                  bg={color}
                  p={4}
                >
                  <CardHeader mb={2}>
                    <Heading size="md" textAlign="center">
                      {collab.title}
                    </Heading>
                  </CardHeader>
                  <Box display="inline-flex" mt={2} gap={1}>
                    {collab.techs.map((tech, idx) => (
                      <Badge key={idx}>{tech}</Badge>
                    ))}
                  </Box>
                  <Divider mt={2} />
                  <CardBody my={2}>
                    <Image
                      src={collab.image}
                      alt={collab.title}
                      borderRadius="lg"
                      width={{ base: "full", md: 240 }}
                      height={{ base: "full", md: 150 }}
                      mb={2}
                    />
                    <Text>{collab.description}</Text>
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
