import React from "react";
import { Box, Heading, Text, Image, Stack, Flex, Link, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex as="header" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          James Monroe
        </Heading>
        <Stack direction="row" spacing={6}>
          <Link href="#about">About</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#contact">Contact</Link>
        </Stack>
      </Flex>

      <Box id="about" padding="2rem">
        <Heading as="h2" size="xl" mb={4}>
          About Me
        </Heading>
        <Flex wrap="wrap">
          <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3MTMxNjkwODd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="James Monroe" borderRadius="full" boxSize="200px" mr={8} />
          <Box>
            <Text fontSize="xl">Hi, I'm James Monroe, a software engineer based in New York City. I specialize in building web applications using modern technologies like React, Node.js, and GraphQL.</Text>
          </Box>
        </Flex>
      </Box>

      <Box id="experience" padding="2rem" bg="gray.100">
        <Heading as="h2" size="xl" mb={4}>
          Experience
        </Heading>
        <Box mb={6}>
          <Heading as="h3" size="lg">
            Software Engineer
          </Heading>
          <Text fontSize="lg">ABC Tech Company (2018 - Present)</Text>
          <Text>Developed and maintained web applications for clients using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality software solutions.</Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            Web Developer Intern
          </Heading>
          <Text fontSize="lg">XYZ Startup (2017 - 2018)</Text>
          <Text>Assisted in the development of responsive web pages using HTML, CSS, and JavaScript. Gained experience with Agile development methodologies.</Text>
        </Box>
      </Box>

      <Box id="contact" padding="2rem">
        <Heading as="h2" size="xl" mb={4}>
          Get In Touch
        </Heading>
        <Text fontSize="xl" mb={8}>
          Feel free to reach out to me through any of the following channels:
        </Text>
        <Stack direction="row" spacing={8}>
          <Link href="https://www.linkedin.com/in/jamesmonroe">
            <Icon as={FaLinkedin} boxSize={8} />
          </Link>
          <Link href="https://twitter.com/jamesmonroe">
            <Icon as={FaTwitter} boxSize={8} />
          </Link>
          <Link href="https://github.com/jamesmonroe">
            <Icon as={FaGithub} boxSize={8} />
          </Link>
        </Stack>
      </Box>

      <Box as="footer" padding="2rem" bg="teal.500" color="white" textAlign="center">
        <Text>© 2023 James Monroe. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
