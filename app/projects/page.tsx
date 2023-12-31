"use client";

import {
  Box,
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import Main from "@/layouts/main";
import Section from "@/components/section";
import { colabList, projectsList } from "@/lib/config";

export default function Projects() {
  const color = useColorModeValue("#f0e7db40", "#20202380");

  return (
    <Main>
      <Section delay={0.1}>
        <Heading as="h3" fontSize={20}>
          Projects
        </Heading>
      </Section>
      <Section delay={0.2}>
        <SimpleGrid columns={[1, 2, 2]} gap={4}>
          {projectsList.map((project, idx) => (
            <Card
              key={idx}
              variant="unstyled"
              overflow="hidden"
              size="sm"
              bg={color}
              p={4}
            >
              <CardHeader mb={2}>
                <Heading size="md" align="center">
                  {project.title}
                </Heading>
              </CardHeader>
              <CardBody my={2}>
                <Image
                  src={project.image}
                  alt={project.title}
                  borderRadius="lg"
                  mb={2}
                />
                <Text>{project.description}</Text>
              </CardBody>
              <Divider />
              <CardFooter>
                <Box
                  display="flex"
                  alignItems="center"
                  justify="space-between"
                  maxW="full"
                  gap={20}
                  mt={2}
                >
                  <Box display="inline-flex" gap={1}>
                    {project.techs.map((tech, idx) => (
                      <Badge key={idx}>{tech}</Badge>
                    ))}
                  </Box>
                  <Link href={project.href}>
                    <Button>View details</Button>
                  </Link>
                </Box>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Section>
      <Section delay={0.3}>
        <Divider mb={5} />
        <Heading as="h3" fontSize={20}>
          Collaborations
        </Heading>
      </Section>
      <Section delay={0.4}>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {colabList.map((collab, idx) => (
            <Card
              key={idx}
              variant="unstyled"
              overflow="hidden"
              size="sm"
              bg={color}
              p={4}
            >
              <CardHeader mb={2}>
                <Heading size="md" align="center">
                  {collab.title}
                </Heading>
              </CardHeader>
              <CardBody my={2}>
                <Image
                  src={collab.image}
                  alt={collab.title}
                  borderRadius="lg"
                  mb={2}
                />
                <Text>{collab.description}</Text>
              </CardBody>
              <Divider />
              <CardFooter>
                <Box
                  display="flex"
                  alignItems="center"
                  justify="space-between"
                  maxW="full"
                  gap={20}
                  mt={2}
                >
                  <Box display="inline-flex" gap={1}>
                    {collab.techs.map((tech, idx) => (
                      <Badge key={idx}>{tech}</Badge>
                    ))}
                  </Box>
                  <Link href={collab.href}>
                    <Button>View details</Button>
                  </Link>
                </Box>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Section>
    </Main>
  );
}
